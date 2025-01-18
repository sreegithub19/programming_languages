section .data
    prompt db 'Enter two numbers: ', 0
    result_sum db 'Sum: ', 0
    result_diff db 'Difference: ', 0
    result_prod db 'Product: ', 0
    result_div db 'Quotient: ', 0
    newline db 0xA, 0

section .bss
    num1 resb 4
    num2 resb 4

section .text
    global _start

_start:
    ; Print prompt
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, prompt      ; pointer to prompt
    mov edx, 18          ; length of prompt
    int 0x80             ; interrupt to make syscall

    ; Read first number (num1)
    mov eax, 3           ; sys_read
    mov ebx, 0           ; file descriptor (stdin)
    mov ecx, num1        ; buffer to store input
    mov edx, 4           ; number of bytes to read
    int 0x80             ; interrupt to make syscall

    ; Read second number (num2)
    mov eax, 3           ; sys_read
    mov ebx, 0           ; file descriptor (stdin)
    mov ecx, num2        ; buffer to store input
    mov edx, 4           ; number of bytes to read
    int 0x80             ; interrupt to make syscall

    ; Convert num1 from string to integer (ASCII to integer)
    mov ecx, num1        ; pointer to num1
    movzx eax, byte [ecx]
    sub eax, '0'         ; convert ASCII to integer (assuming single digit)
    mov ebx, eax         ; store the first digit in ebx

    ; Convert num2 from string to integer (ASCII to integer)
    mov ecx, num2        ; pointer to num2
    movzx eax, byte [ecx]
    sub eax, '0'         ; convert ASCII to integer (assuming single digit)
    mov edx, eax         ; store the second digit in edx

    ; Sum = ebx + edx
    add ebx, edx         ; ebx now contains the sum

    ; Print sum
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, result_sum  ; pointer to result_sum message
    mov edx, 6           ; length of "Sum: "
    int 0x80             ; interrupt to make syscall

    ; Print result_sum (converted to ASCII)
    add ebx, '0'         ; convert sum to ASCII
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, ebx         ; pointer to sum in ASCII
    mov edx, 1           ; length of sum (single digit)
    int 0x80             ; interrupt to make syscall

    ; Print newline
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, newline     ; pointer to newline
    mov edx, 1           ; length of newline
    int 0x80             ; interrupt to make syscall

    ; Difference = ebx - edx
    sub ebx, edx         ; ebx now contains the difference

    ; Print difference
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, result_diff ; pointer to result_diff message
    mov edx, 12          ; length of "Difference: "
    int 0x80             ; interrupt to make syscall

    ; Print result_diff (converted to ASCII)
    add ebx, '0'         ; convert difference to ASCII
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, ebx         ; pointer to difference in ASCII
    mov edx, 1           ; length of difference (single digit)
    int 0x80             ; interrupt to make syscall

    ; Print newline
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, newline     ; pointer to newline
    mov edx, 1           ; length of newline
    int 0x80             ; interrupt to make syscall

    ; Product = ebx * edx
    imul ebx, edx        ; ebx now contains the product

    ; Print product
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, result_prod ; pointer to result_prod message
    mov edx, 9           ; length of "Product: "
    int 0x80             ; interrupt to make syscall

    ; Print result_prod (converted to ASCII)
    add ebx, '0'         ; convert product to ASCII
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, ebx         ; pointer to product in ASCII
    mov edx, 1           ; length of product (single digit)
    int 0x80             ; interrupt to make syscall

    ; Print newline
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, newline     ; pointer to newline
    mov edx, 1           ; length of newline
    int 0x80             ; interrupt to make syscall

    ; Division = ebx / edx (quotient)
    xor edx, edx         ; Clear edx (remainder)
    div ebx              ; eax = quotient, edx = remainder

    ; Print quotient
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, result_div  ; pointer to result_div message
    mov edx, 10          ; length of "Quotient: "
    int 0x80             ; interrupt to make syscall

    ; Print quotient (converted to ASCII)
    add eax, '0'         ; convert quotient to ASCII
    mov eax, 4           ; sys_write
    mov ebx, 1           ; file descriptor (stdout)
    mov ecx, eax         ; pointer to quotient in ASCII
    mov edx, 1           ; length of quotient (single digit)
    int 0x80             ; interrupt to make syscall

    ; Exit the program
    mov eax, 1           ; sys_exit
    xor ebx, ebx         ; status code 0
    int 0x80             ; interrupt to make syscall
