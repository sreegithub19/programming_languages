section .data
    num1 dd 10                  ; First number (10)
    num2 dd 5                   ; Second number (5)
    result_msg db "Result: ", 0 ; Message prefix
    newline db 0xA, 0           ; Newline character
    ten dd 10                   ; Constant for division by 10

section .bss
    result resd 1               ; Variable to store the result
    buffer resb 12              ; Buffer to store the string representation of the result

section .text
    global _start               ; Entry point for the program

_start:
    ; Load the numbers into registers
    mov eax, [num1]             ; Load num1 into EAX
    mov ebx, [num2]             ; Load num2 into EBX

    ; Addition
    add eax, ebx                ; EAX = EAX + EBX
    mov [result], eax           ; Store the result of addition in 'result'
    call print_result           ; Print the result

    ; Subtraction
    mov eax, [num1]             ; Reload num1 into EAX
    sub eax, ebx                ; EAX = EAX - EBX
    mov [result], eax           ; Store the result of subtraction in 'result'
    call print_result           ; Print the result

    ; Multiplication
    mov eax, [num1]             ; Reload num1 into EAX
    imul eax, ebx               ; EAX = EAX * EBX (signed multiplication)
    mov [result], eax           ; Store the result of multiplication in 'result'
    call print_result           ; Print the result

    ; Division
    mov eax, [num1]             ; Reload num1 into EAX (dividend)
    cdq                         ; Sign-extend EAX into EDX for division
    idiv ebx                    ; EAX = EAX / EBX, remainder in EDX
    mov [result], eax           ; Store the result of division in 'result'
    call print_result           ; Print the result

    ; Exit the program
    mov eax, 1                  ; System call number for sys_exit
    xor ebx, ebx                ; Exit code 0
    int 0x80                    ; Trigger the system call

; Subroutine to print the result
print_result:
    ; Print the "Result: " message
    mov eax, 4                  ; System call number for sys_write
    mov ebx, 1                  ; File descriptor 1 (stdout)
    mov ecx, result_msg         ; Address of the message
    mov edx, 8                  ; Length of the message
    int 0x80                    ; Trigger the system call

    ; Convert the result to a string and print it
    mov eax, [result]           ; Load the result into EAX
    mov edi, buffer + 11        ; Set EDI to the end of the buffer
    call int_to_string          ; Convert the integer to a string
    mov eax, 4                  ; System call number for sys_write
    mov ebx, 1                  ; File descriptor 1 (stdout)
    mov ecx, buffer             ; Address of the string
    mov edx, edi                ; Length of the string
    sub edx, buffer             ; Calculate the length of the string
    int 0x80                    ; Trigger the system call

    ; Print a newline
    mov eax, 4                  ; System call number for sys_write
    mov ebx, 1                  ; File descriptor 1 (stdout)
    mov ecx, newline            ; Address of the newline character
    mov edx, 1                  ; Length of the newline character
    int 0x80                    ; Trigger the system call

    ret                         ; Return from the subroutine

; Subroutine to convert an integer to a string
int_to_string:
    ; Input: EAX = integer to convert, EDI = address of the buffer
    ; Output: EDI = end of the string (null terminator)
    xor ecx, ecx                ; Clear digit counter

    ; Handle zero case
    test eax, eax               ; Check if EAX is 0
    jnz convert_loop            ; If not zero, continue
    mov byte [edi], '0'         ; If zero, store '0'
    inc edi                     ; Move to the next position
    mov byte [edi], 0           ; Null-terminate the string
    ret                         ; Return

convert_loop:
    xor edx, edx                ; Clear EDX (remainder)
    div dword [ten]             ; Divide EAX by 10, result in EAX, remainder in EDX
    add dl, '0'                 ; Convert remainder to ASCII
    dec edi                     ; Move buffer pointer backward
    mov [edi], dl               ; Store the ASCII character in the buffer
    inc ecx                     ; Increment the digit counter
    test eax, eax               ; Check if EAX is 0
    jnz convert_loop            ; Repeat if EAX is not 0

    ; Fix the buffer pointer: move EDI forward to the end of the string
    mov byte [edi + ecx], 0     ; Null-terminate the string
    ret                         ; Return from the subroutine
