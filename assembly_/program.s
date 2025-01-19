SECTION .data
    fmt db "The sum of %d and %d is %d", 10, 0  ; Format string for printf

SECTION .text
    extern printf                ; Declare printf as an external function
    global main                  ; Declare main as the entry point

main:
    mov     rax, 14              ; Load 14 into rax
    mov     rbx, 10              ; Load 10 into rbx
    mov     rcx, rax             ; Move 14 to rcx
    add     rax, rbx             ; Add rax and rbx (result in rax)

    mov     rdi, fmt             ; First argument: format string
    mov     rsi, rcx             ; Second argument: first number (14)
    mov     rdx, rbx             ; Third argument: second number (10)
    mov     r10, rax             ; Fourth argument: result of addition
    xor     rax, rax             ; Clear rax (no floating-point arguments)
    call    printf               ; Call printf

    mov     rax, 60              ; syscall: exit
    xor     rdi, rdi             ; exit code: 0
    syscall                      ; Exit program

section .note.GNU-stack noalloc noexec nowrite progbits