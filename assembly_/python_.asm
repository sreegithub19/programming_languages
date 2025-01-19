section .data
    python_command db 'python -c "print(\'Hello from Python\')"', 0

section .text
    global _start

_start:
    ; Prepare arguments for execve
    mov eax, 11               ; sys_execve syscall number
    lea ebx, [python_command] ; pointer to the command
    xor ecx, ecx              ; argv = null
    xor edx, edx              ; envp = null
    int 0x80                  ; make syscall

    ; Exit the program
    mov eax, 1                ; sys_exit syscall number
    xor ebx, ebx              ; exit status 0
    int 0x80                  ; make syscall