section .data
    hello1 db 'Hello world!', 0                    ; Null-terminated string for the first line
    sum_msg db 'The sum of 14 and 10 is: ', 0      ; Null-terminated string for the sum message
    sub_msg db 'The difference of 14 and 10 is: ', 0 ; Null-terminated string for the subtraction message
    mul_msg db 'The product of 14 and 10 is: ', 0  ; Null-terminated string for the multiplication message
    div_msg db 'The quotient of 14 and 10 is: ', 0 ; Null-terminated string for the division message
    newline db 10, 0                               ; Newline character
    result db '0000', 0                            ; Placeholder for the result (four digits, null-terminated)

section .bss
    ; No uninitialized data

section .text
    global _start                ; Entry point for the linker

_start:
    ; Write the "Hello world!" string to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, hello1              ; pointer to the hello1 string
    mov rdx, 13                  ; length of the hello1 string
    syscall                      ; invoke the system call

    ; Print a newline character
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, newline             ; pointer to the newline character
    mov rdx, 1                   ; length of the newline character
    syscall                      ; invoke the system call

    ; ============================
    ; Calculate and print the sum
    ; ============================
    ; Write the sum message to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, sum_msg             ; pointer to the sum_msg string
    mov rdx, 26                  ; length of the sum_msg string
    syscall                      ; invoke the system call

    ; Calculate the sum of two numbers
    mov rax, 14                  ; Load 14 into rax
    add rax, 10                  ; Add 10 to rax (result in rax)
    call print_result            ; Print the result

    ; Print a newline character
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, newline             ; pointer to the newline character
    mov rdx, 1                   ; length of the newline character
    syscall                      ; invoke the system call

    ; ============================
    ; Calculate and print the difference
    ; ============================
    ; Write the subtraction message to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, sub_msg             ; pointer to the sub_msg string
    mov rdx, 33                  ; length of the sub_msg string
    syscall                      ; invoke the system call

    ; Calculate the difference of two numbers
    mov rax, 14                  ; Load 14 into rax
    sub rax, 10                  ; Subtract 10 from rax (result in rax)
    call print_result            ; Print the result

    ; Print a newline character
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, newline             ; pointer to the newline character
    mov rdx, 1                   ; length of the newline character
    syscall                      ; invoke the system call

    ; ============================
    ; Calculate and print the product
    ; ============================
    ; Write the multiplication message to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, mul_msg             ; pointer to the mul_msg string
    mov rdx, 29                  ; length of the mul_msg string
    syscall                      ; invoke the system call

    ; Calculate the product of two numbers
    mov rax, 14                  ; Load 14 into rax
    imul rax, 10                 ; Multiply rax by 10 (result in rax)
    call print_result            ; Print the result

    ; Print a newline character
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, newline             ; pointer to the newline character
    mov rdx, 1                   ; length of the newline character
    syscall                      ; invoke the system call

    ; ============================
    ; Calculate and print the quotient
    ; ============================
    ; Write the division message to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, div_msg             ; pointer to the div_msg string
    mov rdx, 31                  ; length of the div_msg string
    syscall                      ; invoke the system call

    ; Calculate the quotient of two numbers
    mov rax, 14                  ; Load 14 into rax
    xor rdx, rdx                 ; Clear rdx (required for division)
    div qword [ten]              ; Divide rax by 10 (quotient in rax, remainder in rdx)
    call print_result            ; Print the result

    ; Print a newline character
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, newline             ; pointer to the newline character
    mov rdx, 1                   ; length of the newline character
    syscall                      ; invoke the system call

    ; Exit the program
    mov rax, 60                  ; sys_exit system call number
    xor rdi, rdi                 ; exit status (0)
    syscall                      ; invoke the system call

print_result:
    ; Convert the result to ASCII characters
    xor rcx, rcx                 ; Clear rcx (counter)
    mov rbx, 10                  ; Divisor for conversion
convert_loop:
    xor rdx, rdx                 ; Clear rdx
    div rbx                      ; Divide rax by 10, quotient in rax, remainder in rdx
    add dl, '0'                  ; Convert remainder to ASCII
    mov [result + rcx], dl       ; Store ASCII character in result
    inc rcx                      ; Increment counter
    test rax, rax                ; Check if quotient is 0
    jnz convert_loop             ; Repeat if quotient is not 0

    ; Reverse the digits in result
    mov rsi, result              ; Pointer to the result buffer
    mov rdi, result              ; Pointer to the result buffer
    add rdi, rcx                 ; Move rdi to the end of the digits
    dec rdi                      ; Point to the last digit
reverse_loop:
    cmp rsi, rdi                 ; Compare pointers
    jge end_reverse              ; If they have met or crossed, done reversing
    mov al, [rsi]                ; Temp store the low digit
    mov bl, [rdi]                ; Temp store the high digit
    mov [rsi], bl                ; Put high digit in low position
    mov [rdi], al                ; Put low digit in high position
    inc rsi                      ; Move the low pointer up
    dec rdi                      ; Move the high pointer down
    jmp reverse_loop             ; Repeat
end_reverse:

    ; Print the result to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, result              ; pointer to the result buffer
    mov rdx, rcx                 ; length of the result buffer
    syscall                      ; invoke the system call
    ret

section .data
ten dq 10                        ; Define a constant for the divisor in division