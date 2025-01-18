SECTION .data
    fmt db "%d", 10, 0           ; Format string for printf

SECTION .text
    extern printf                ; Declare printf as an external function
    global main                  ; Declare main as the entry point

main:
    mov     rax, 14              ; Load 14 into rax
    mov     rbx, 10              ; Load 10 into rbx
    add     rax, rbx             ; Add rax and rbx (result in rax)

    mov     rdi, fmt             ; First argument: format string
    mov     rsi, rax             ; Second argument: result of addition
    xor     rax, rax             ; Clear rax (no floating-point arguments)
    call    printf               ; Call printf

    mov     rax, 60              ; syscall: exit
    xor     rdi, rdi             ; exit code: 0
    syscall                      ; Exit program

section .note.GNU-stack noalloc noexec nowrite progbits
