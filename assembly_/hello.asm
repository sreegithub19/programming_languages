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
    mov rdx, 34                  ; length of the hello string
    syscall                      ; invoke the system call

    ; Calculate the sum of two numbers
    mov rax, 14                  ; Load 14 into rax
    add rax, 10                  ; Add 10 to rax (result in rax)
    
    ; Convert the sum to ASCII and store in sum
    add rax, '0'                 ; Convert the result to ASCII
    mov [sum], al                ; Store the result in the sum variable

    ; Print the sum to stdout
    mov rax, 1                   ; sys_write system call number (1 = write)
    mov rdi, 1                   ; file descriptor (1 = stdout)
    mov rsi, sum                 ; pointer to the sum buffer
    mov rdx, 2                   ; length of the sum buffer (two digits)
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