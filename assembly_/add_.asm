SECTION .data

    extern printf
    global main

fmt:
    db "%d", 10, 0

SECTION .text

main:
    mov     eax, 14
    mov     ebx, 10
    add     eax, ebx

    push    eax
    push    fmt
    call    printf

    mov     eax, 1
    int     0x80