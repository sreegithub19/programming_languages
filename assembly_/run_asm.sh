#!/bin/bash

# Define the assembly code
asm_code=$(cat << 'EOF'
section .data
    fmt db "Hello, World!", 10, 0

section .bss
    array resq 5
    cnt resq 1

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

# Copy the assembly file into the container
COPY hello.asm .

# Assemble and link the assembly file
RUN nasm -f elf64 -o hello.o hello.asm && gcc -no-pie -o hello hello.o

# Command to run the executable
CMD ["./hello"]
EOF
)

# Create an assembly file
echo "$asm_code" > hello.asm

# Create a Dockerfile
echo "$dockerfile_content" > Dockerfile

# Build the Docker image
docker build -t hello-asm .

# Run the Docker container in the background
container_id=$(docker run -d hello-asm)

# Wait for the container to start
sleep 2

# Execute the assembly program within the container
docker exec -it $container_id ./hello

# Stop and remove the container
docker stop $container_id
docker rm $container_id

# Clean up
rm hello.asm Dockerfile