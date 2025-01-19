#!/bin/bash

# Check for required commands
if ! command -v nasm &> /dev/null
then
    echo "nasm could not be found, please install it."
    exit 1
fi

if ! command -v gcc &> /dev/null
then
    echo "gcc could not be found, please install it."
    exit 1
fi

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
    mov qword [array+2*8], 2
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
    mov rdi, 1            ; file descriptor 1 is stdout
    mov rsi, array+16     ; address of the 3rd largest number
    mov rdx, 8            ; number of bytes to write
    mov rax, 1            ; syscall number for sys_write
    syscall

    ; Exit
    mov rax, 60           ; syscall number for sys_exit
    xor rdi, rdi          ; exit status 0
    syscall
EOF
)

# Convert assembly code to machine code using nasm
machine_code=$(echo "$asm_code" | nasm -f bin -o /dev/stdout /dev/stdin 2>/dev/null | hexdump -v -e '1/1 "0x%02X,"')

# Convert machine code to C byte array
c_code="unsigned char code[] = {$machine_code 0};"

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