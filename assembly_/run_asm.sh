#!/bin/bash

# Define the assembly code
asm_code=$(cat << 'EOF'
section .data
    fmt db "The 3rd largest number is: %lld", 10, 0

section .bss
    array resq 5
    cnt resq 1

section .text
    global _start

_start:
    ; Define the array
    mov qword [array+0*8], 7
    mov qword [array+1*8], 13
    mov qword [array+2*8], 20
    mov qword [array+3*8], 10
    mov qword [array+4*8], 6

    ; Sort the array
    mov rcx, 4

outer_loop:
    mov rsi, array
    mov rdi, rcx

inner_loop:
    mov rax, [rsi]
    mov rbx, [rsi+8]
    cmp rax, rbx
    jle no_swap
    mov [rsi], rbx
    mov [rsi+8], rax

no_swap:
    add rsi, 8
    dec rdi
    jnz inner_loop

    dec rcx
    jnz outer_loop

    ; Print the 3rd largest number
    mov rax, 1
    mov rdi, 1
    mov rsi, fmt
    mov rdx, [array+2*8]
    syscall

    ; Exit
    mov rax, 60
    xor rdi, rdi
    syscall
EOF
)

# Convert assembly code to machine code using nasm
machine_code=$(echo "$asm_code" | nasm -f bin -o /dev/stdout /dev/stdin | xxd -p | tr -d '\n')

# Convert machine code to C byte array
c_code="unsigned char code[] = {"
for ((i=0; i<${#machine_code}; i+=2)); do
    c_code+="0x${machine_code:$i:2},"
done
c_code="${c_code%,}};"

# Define the C program to execute the machine code
c_program=$(cat << EOF
#include <stdio.h>
#include <string.h>
#include <sys/mman.h>
#include <unistd.h>

$c_code

int main() {
    void *exec_mem = mmap(NULL, sizeof(code), PROT_WRITE | PROT_EXEC, MAP_ANON | MAP_PRIVATE, -1, 0);
    if (exec_mem == MAP_FAILED) {
        perror("mmap");
        return 1;
    }
    memcpy(exec_mem, code, sizeof(code));
    ((void(*)())exec_mem)();
    return 0;
}
EOF
)

# Compile and run the C program
gcc -x c -o /dev/stdout - <<< "$c_program" | /dev/stdin