#include <iostream>
#include <cstring>
#include <cstdlib>
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/wait.h>

const char* bubble_sort_asm = R"(
section .data
    fmt db "The 3rd largest number is: %lld", 10, 0

section .bss
    array resq 5

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    ; Hardcode the five numbers into the array
    mov qword [array+0*8], 70
    mov qword [array+1*8], 130
    mov qword [array+2*8], 20
    mov qword [array+3*8], 100
    mov qword [array+4*8], 60

    mov rcx, 0

OUTER_LOOP:
    cmp rcx, 5
    jge PRINT
    mov rax, [array+rcx*8]

INNER_LOOP:
    inc rcx
    cmp rcx, 5
    jz OK 
    cmp rax, [array+rcx*8]
    jle INNER_LOOP
    xchg rax, [array+rcx*8]
    jmp INNER_LOOP

OK:
    mov rcx, [cnt]
    mov [array+rcx*8], rax
    inc rcx
    jmp OUTER_LOOP

PRINT:
    mov rax, 0
    mov rcx, 2
    mov rax, [array+rcx*8]
    mov rdi, fmt
    mov rsi, rax
    call printf

END:
    mov rax, 0
    leave
    ret
)";

void compile_and_run(const char* asm_code) {
    // Create a memory file descriptor
    int mem_fd = memfd_create("bubble_sort", 0);
    if (mem_fd == -1) {
        perror("memfd_create");
        exit(EXIT_FAILURE);
    }

    // Write the assembly code to the memory file
    size_t asm_code_len = strlen(asm_code);
    if (write(mem_fd, asm_code, asm_code_len) != asm_code_len) {
        perror("write");
        close(mem_fd);
        exit(EXIT_FAILURE);
    }

    // Assemble the code
    if (fork() == 0) {
        char mem_fd_path[256];
        snprintf(mem_fd_path, sizeof(mem_fd_path), "/proc/self/fd/%d", mem_fd);
        execlp("nasm", "nasm", "-f", "elf64", "-o", "/proc/self/fd/1", mem_fd_path, NULL);
        perror("execlp");
        exit(EXIT_FAILURE);
    } else {
        wait(NULL);
    }

    // Create a second memory file for the object file
    int obj_fd = memfd_create("bubble_sort.o", 0);
    if (obj_fd == -1) {
        perror("memfd_create");
        close(mem_fd);
        exit(EXIT_FAILURE);
    }

    // Link the object file with the C standard library using gcc
    if (fork() == 0) {
        char obj_fd_path[256];
        snprintf(obj_fd_path, sizeof(obj_fd_path), "/proc/self/fd/%d", obj_fd);
        execlp("gcc", "gcc", "-no-pie", "-o", "/proc/self/fd/1", obj_fd_path, "-lc", NULL);
        perror("execlp");
        exit(EXIT_FAILURE);
    } else {
        wait(NULL);
    }

    // Execute the compiled binary
    if (fork() == 0) {
        execl("/proc/self/fd/1", "bubble_sort", NULL);
        perror("execl");
        exit(EXIT_FAILURE);
    } else {
        wait(NULL);
    }

    close(mem_fd);
    close(obj_fd);
}

int main() {
    compile_and_run(bubble_sort_asm);
    return 0;
}