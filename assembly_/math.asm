section .data
    num1 dd 10          ; First number (10)
    num2 dd 5           ; Second number (5)

section .bss
    result dd 0         ; Variable to store the result

section .text
    global _start       ; Entry point for the program

_start:
    ; Load the numbers into registers
    mov eax, [num1]     ; Load num1 into EAX
    mov ebx, [num2]     ; Load num2 into EBX

    ; Addition
    add eax, ebx        ; EAX = EAX + EBX
    mov [result], eax   ; Store the result of addition in 'result'

    ; Subtraction
    mov eax, [num1]     ; Reload num1 into EAX
    sub eax, ebx        ; EAX = EAX - EBX
    mov [result], eax   ; Store the result of subtraction in 'result'

    ; Multiplication
    mov eax, [num1]     ; Reload num1 into EAX
    imul eax, ebx       ; EAX = EAX * EBX (signed multiplication)
    mov [result], eax   ; Store the result of multiplication in 'result'

    ; Division
    mov eax, [num1]     ; Reload num1 into EAX (dividend)
    cdq                 ; Sign-extend EAX into EDX for division
    idiv ebx            ; EAX = EAX / EBX, remainder in EDX
    mov [result], eax   ; Store the result of division in 'result'

    ; Exit the program
    mov eax, 1          ; System call number for sys_exit
    xor ebx, ebx        ; Exit code 0
    int 0x80            ; Trigger the system call
