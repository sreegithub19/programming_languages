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
# Use an official Ubuntu as a base image for the build stage
FROM ubuntu:latest AS builder

# Install necessary tools
RUN apt-get update && apt-get install -y \
    nasm \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Build the assembly code
ARG ASM_CODE
RUN echo "$ASM_CODE" | nasm -f elf64 -o hello.o - && gcc -nostartfiles -no-pie -o hello hello.o

# Use a lightweight base image for the final stage
FROM ubuntu:latest

# Copy the compiled binary from the build stage
COPY --from=builder /app/hello /app/hello

# Set the working directory
WORKDIR /app

# Ensure the executable has the correct permissions
RUN chmod +x /app/hello

# Command to execute the binary
CMD ["/app/hello"]
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