docker run --rm -i hello-asm sh -c '
nasm -f elf64 -o /app/hello.o /dev/stdin && \
gcc -nostartfiles -no-pie -o /app/hello /app/hello.o && \
/app/hello
' <<'EOF'
section .data
    fmt db "Hello, Docker Inline World!", 10, 0

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