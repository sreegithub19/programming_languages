#!/bin/bash

# Define the assembly code
asm_code=$(cat << 'EOF'
section .data
    fmt db "Hello, World!", 10, 0

section .text
    global _start

_start:
    ; Write the message to stdout
    mov rax, 1          ; syscall number for sys_write
    mov rdi, 1          ; file descriptor 1 is stdout
    mov rsi, fmt        ; address of the string
    mov rdx, 14         ; number of bytes
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

# Command to keep the container running
CMD ["tail", "-f", "/dev/null"]
EOF
)

# Create a temporary directory for the Docker context
tmpdir=$(mktemp -d)
echo "$dockerfile_content" > "$tmpdir/Dockerfile"
echo "$asm_code" > "$tmpdir/hello.asm"

# Build the Docker image
docker build -t hello-asm "$tmpdir"

# Check if the image was built successfully
if [ $? -ne 0 ]; then
    echo "Docker image build failed"
    exit 1
fi

# Run the Docker container
container_id=$(docker run -d hello-asm)

# Wait for the container to start
sleep 2

echo "Copying assembly code to the container..."
# Copy the assembly code into the container
docker cp "$tmpdir/hello.asm" "$container_id:/app/hello.asm"

echo "Assembling and linking the assembly code inside the container..."
# Assemble and link the assembly code inside the container
docker exec $container_id sh -c "nasm -f elf64 -o /app/hello.o /app/hello.asm && gcc -nostartfiles -no-pie -o /app/hello /app/hello.o"

# Ensure the executable has the correct permissions
docker exec $container_id sh -c "chmod +x /app/hello"

echo "Executing the assembly program within the container..."
# Execute the assembly program within the container
docker exec $container_id /app/hello

# Check if the assembly program exists and output its file details
docker exec $container_id ls -l /app/hello

# Stop and remove the container
docker stop $container_id
docker rm $container_id

# Clean up
rm -r "$tmpdir"