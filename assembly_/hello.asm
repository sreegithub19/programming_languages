section .data
    hello db 'Hello world! ', 0        ; Null-terminated string with space at the end
    result db 'The sum is: ', 0        ; Null-terminated string for the sum message
    num db '00', 0                     ; Placeholder for the result (two digits, null-terminated)

section .bss
    sum resb 1                         ; Reserve a byte for the sum

section .text
    extern printf                      ; Declare printf as an external function
    global _start                      ; Entry point for the linker

_start:
    ; Calculate the sum of two numbers
    mov rax, 14                        ; Load 14 into rax
    add rax, 10                        ; Add 10 to rax (result in rax)
    add rax, '0'                       ; Convert the result to ASCII
    mov [sum], al                      ; Store the result in the sum variable

    ; Print the "Hello world!" string
    mov rax, 1                         ; sys_write system call number (1 = write)
    mov rdi, 1                         ; file descriptor (1 = stdout)
    mov rsi, hello                     ; pointer to the "Hello world!" string
    mov rdx, 13                        ; length of the "Hello world!" string
    syscall                            ; invoke the system call

    ; Print the sum message
    mov rax, 1                         ; sys_write system call number (1 = write)
    mov rdi, 1                         ; file descriptor (1 = stdout)
    mov rsi, result                    ; pointer to the sum message string
    mov rdx, 11                        ; length of the sum message string
    syscall                            ; invoke the system call

    ; Print the sum
    mov rax, 1                         ; sys_write system call number (1 = write)
    mov rdi, 1                         ; file descriptor (1 = stdout)
    mov rsi, sum                       ; pointer to the sum variable
    mov rdx, 1                         ; length of the sum variable (single digit)
    syscall                            ; invoke the system call

    ; Exit the program
    mov rax, 60                        ; sys_exit system call number
    xor rdi, rdi                       ; exit status (0)
    syscall                            ; invoke the system call