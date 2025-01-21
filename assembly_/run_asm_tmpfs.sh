echo 'section .data
fmt db "Hello, Docker World!", 10, 0

section .text
    global _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, fmt
    mov rdx, 20
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall' | docker run --rm -i hello-asm sh -c "
nasm -f elf64 -o /app/hello.o /dev/stdin && \
gcc -nostartfiles -no-pie -o /app/hello /app/hello.o && \
/app/hello
"
