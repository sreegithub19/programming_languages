section .data
    hello db 'Hello world!', 0  ; Null-terminated string

section .text
    global _start                ; Entry point for the linker

_start:
    ; Write the string to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, hello               ; pointer to the string
    mov rdx, 13                  ; length of the string
    syscall                      ; invoke the system call

    ; Exit the program
    mov rax, 60                  ; sys_exit system call number
    xor rdi, rdi                 ; exit status (0)
    syscall                      ; invoke the system call
