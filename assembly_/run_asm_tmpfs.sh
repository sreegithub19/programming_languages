#!/bin/bash

# Define the assembly code as a multi-line string
asm_code=$(cat << 'EOF'
section .data
    fmt db "Hello, Docker World!", 10, 0

section .text
    global _start

_start:
    ; Write the message to stdout
    mov rax, 1          ; syscall number for sys_write
    mov rdi, 1          ; file descriptor 1 is stdout
    mov rsi, fmt        ; address of the string
    mov rdx, 20         ; number of bytes
    syscall

    ; Exit the program
    mov rax, 60         ; syscall number for sys_exit
    xor rdi, rdi        ; exit status 0
    syscall
EOF
)

# Create a Dockerfile content
dockerfile_content=$(cat << 'EOF'
# Use an official Ubuntu as a base image
FROM ubuntu:latest

# Install necessary tools
RUN apt-get update && apt-get install -y \
    nasm \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Command to compile and execute the assembly code
CMD ["sh", "-c", "printf \"%s\" \"$ASM_CODE\" | nasm -f elf64 -o hello.o && gcc -nostartfiles -no-pie -o hello hello.o && ./hello"]
EOF
)

# Create a temporary directory for the Docker context
tmpdir=$(mktemp -d)
echo "$dockerfile_content" > "$tmpdir/Dockerfile"

# Build the Docker image
docker build --build-arg ASM_CODE="$asm_code" -t hello-asm "$tmpdir"

# Check if the image was built successfully
if [ $? -ne 0 ]; then
    echo "Docker image build failed"
    exit 1
fi

# Run the Docker container
docker run --rm hello-asm

# Clean up
rm -r "$tmpdir"