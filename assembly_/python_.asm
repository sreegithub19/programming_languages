section .data
    python_command db '/usr/bin/python3', 0
    arg1 db '-c', 0
    arg2 db 'print("Hello from Python")', 0

section .bss
    nullbyte resb 1

section .text
    global _start

_start:
    ; Prepare arguments for execve
    mov rax, 59               ; sys_execve syscall number
    lea rdi, [rel python_command] ; pointer to the command
    lea rsi, [rel arg1]           ; argv[0] = -c
    lea rdx, [rel arg2]           ; argv[1] = 'print("Hello from Python")'

    ; Setup stack for argv
    mov r10, 0                ; null terminator
    push r10                  ; argv[2] = NULL
    push rdx                  ; argv[1] = arg2
    push rsi                  ; argv[0] = arg1
    push rdi                  ; argv[0] = python_command

    mov rsi, rsp              ; argv = stack pointer
    
    xor rdx, rdx              ; envp = null
    syscall                   ; make syscall

    ; Exit the program
    mov rax, 60               ; sys_exit syscall number
    xor rdi, rdi              ; exit status 0
    syscall                   ; make syscall