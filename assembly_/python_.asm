section .data
    python_command db 'python', 0
    arg1 db '-c', 0
    arg2 db 'print("Hello from Python")', 0

section .bss
    nullbyte resb 1

section .text
    global _start

_start:
    ; Prepare arguments for execve
    mov eax, 11               ; sys_execve syscall number
    lea ebx, [python_command] ; pointer to the command
    lea ecx, [arg1]           ; argv[0] = -c
    lea edx, [arg2]           ; argv[1] = 'print("Hello from Python")'
    
    ; Push nullbyte to the stack
    lea esi, [nullbyte]
    push esi                  ; argv[2] = NULL
    push edx                  ; argv[1] = arg2
    push ecx                  ; argv[0] = arg1
    push ebx                  ; argv[0] = python
    
    mov ecx, esp              ; argv = stack pointer
    
    xor edx, edx              ; envp = null
    int 0x80                  ; make syscall

    ; Exit the program
    mov eax, 1                ; sys_exit syscall number
    xor ebx, ebx              ; exit status 0
    int 0x80                  ; make syscall