section .data
    num1 db 5           ; First number (hardcoded)
    num2 db 3           ; Second number (hardcoded)
    result_sum db 'Sum: ', 0
    result_diff db 'Difference: ', 0
    result_prod db 'Product: ', 0
    result_div db 'Quotient: ', 0
    newline db 0xA, 0    ; Newline character
    result_char db 0     ; Temporary storage for ASCII character

section .text
    global _start

_start:
    ; Load the hardcoded numbers into registers
    mov al, [num1]      ; Load num1 (5) into AL register
    mov bl, [num2]      ; Load num2 (3) into BL register

    ; Sum = al + bl
    add al, bl          ; AL now contains the sum (5 + 3 = 8)

    ; Print Sum
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, result_sum ; pointer to result_sum message
    mov edx, 6          ; length of "Sum: "
    int 0x80            ; interrupt to make syscall

    ; Print sum result (converted to ASCII)
    add al, '0'         ; Convert sum to ASCII (8 -> '8')
    mov [result_char], al ; Store ASCII value in memory
    mov ecx, result_char ; Load memory address into ECX
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov edx, 1          ; length of 1 byte (single digit)
    int 0x80            ; interrupt to make syscall

    ; Print newline
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, newline    ; pointer to newline
    mov edx, 1          ; length of newline
    int 0x80            ; interrupt to make syscall

    ; Difference = al - bl
    mov al, [num1]      ; Reload num1 into AL
    sub al, bl          ; AL now contains the difference (5 - 3 = 2)

    ; Print Difference
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, result_diff ; pointer to result_diff message
    mov edx, 12         ; length of "Difference: "
    int 0x80            ; interrupt to make syscall

    ; Print difference result (converted to ASCII)
    add al, '0'         ; Convert difference to ASCII (2 -> '2')
    mov [result_char], al ; Store ASCII value in memory
    mov ecx, result_char ; Load memory address into ECX
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov edx, 1          ; length of 1 byte (single digit)
    int 0x80            ; interrupt to make syscall

    ; Print newline
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, newline    ; pointer to newline
    mov edx, 1          ; length of newline
    int 0x80            ; interrupt to make syscall

    ; Product = al * bl
    mov al, [num1]      ; Reload num1 into AL
    imul al, bl         ; AL now contains the product (5 * 3 = 15)

    ; Print Product
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, result_prod ; pointer to result_prod message
    mov edx, 9          ; length of "Product: "
    int 0x80            ; interrupt to make syscall

    ; Convert multi-digit product to ASCII
    xor ah, ah          ; Clear AH for division
    mov bl, 10          ; Divisor
    div bl              ; AL = quotient, AH = remainder

    ; Print higher-order digit (quotient)
    add al, '0'         ; Convert to ASCII
    mov [result_char], al ; Store ASCII value in memory
    mov ecx, result_char ; Load memory address into ECX
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov edx, 1          ; length of 1 byte
    int 0x80            ; interrupt to make syscall

    ; Print lower-order digit (remainder)
    mov al, ah          ; Move remainder to AL
    add al, '0'         ; Convert to ASCII
    mov [result_char], al ; Store ASCII value in memory
    mov ecx, result_char ; Load memory address into ECX
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov edx, 1          ; length of 1 byte
    int 0x80            ; interrupt to make syscall

    ; Print newline
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, newline    ; pointer to newline
    mov edx, 1          ; length of newline
    int 0x80            ; interrupt to make syscall

    ; Division = al / bl (quotient)
    mov al, [num1]      ; Reload num1 into AL
    xor ah, ah          ; Clear AH to prepare for division
    div bl              ; AX = quotient, AH = remainder (5 / 3 = quotient 1)

    ; Print Quotient
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, result_div ; pointer to result_div message
    mov edx, 10         ; length of "Quotient: "
    int 0x80            ; interrupt to make syscall

    ; Print quotient result (converted to ASCII)
    add al, '0'         ; Convert quotient to ASCII (1 -> '1')
    mov [result_char], al ; Store ASCII value in memory
    mov ecx, result_char ; Load memory address into ECX
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov edx, 1          ; length of 1 byte
    int 0x80            ; interrupt to make syscall

    ; Print newline
    mov eax, 4          ; sys_write
    mov ebx, 1          ; file descriptor (stdout)
    mov ecx, newline    ; pointer to newline
    mov edx, 1          ; length of newline
    int 0x80            ; interrupt to make syscall

    ; Exit the program
    mov eax, 1          ; sys_exit
    xor ebx, ebx        ; exit status 0
    int 0x80            ; interrupt to make syscall
