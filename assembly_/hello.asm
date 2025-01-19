section .data
    hello db 'Hello world! The sum of 14 and 10 is: ', 0  ; Null-terminated string with space at the end
    newline db 10, 0                                      ; Newline character
    sum db '00', 0                                        ; Placeholder for the result (two digits, null-terminated)

section .bss
    ; No uninitialized data

section .text
    global _start                ; Entry point for the linker

_start:
    ; Write the "Hello world!" string to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, hello               ; pointer to the hello string
    mov rdx, 37                  ; length of the hello string (including "is: ")
    syscall                      ; invoke the system call

    ; Calculate the sum of two numbers
    mov rax, 14                  ; Load 14 into rax
    add rax, 10                  ; Add 10 to rax (result in rax)
    
    ; Convert the sum to ASCII characters
    xor rcx, rcx                 ; Clear rcx (counter)
    mov rbx, 10                  ; Divisor for conversion
convert_loop:
    xor rdx, rdx                 ; Clear rdx
    div rbx                      ; Divide rax by 10, quotient in rax, remainder in rdx
    add dl, '0'                  ; Convert remainder to ASCII
    mov [sum + rcx], dl          ; Store ASCII character in sum
    inc rcx                      ; Increment counter
    test rax, rax                ; Check if quotient is 0
    jnz convert_loop             ; Repeat if quotient is not 0

    ; Reverse the digits in sum
    mov rsi, sum                 ; Pointer to the sum buffer
    mov rdi, sum                 ; Pointer to the sum buffer
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

    ; Print the sum to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, sum                 ; pointer to the sum buffer
    mov rdx, rcx                 ; length of the sum buffer
    syscall                      ; invoke the system call

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