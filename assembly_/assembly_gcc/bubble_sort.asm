section .data
    a: dq 2
    b: dq 0
    ind: dq 0
    cnt: dq 0
    cnt2: dq 0
    fmt: db "%lld ", 10, 0
    fmt_out: db "The 3rd largest number is: %lld ", 10, 0

section .bss
    array resq 21

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    ; Hardcode the five numbers into the array
    mov qword [array+0*8], 7
    mov qword [array+1*8], 13
    mov qword [array+2*8], 2
    mov qword [array+3*8], 10
    mov qword [array+4*8], 6

    mov rcx, 0

OUTER_LOOP:
    cmp rcx, 5
    jge PRINT
    mov [cnt], rcx
    mov rax, [array+rcx*8]

INNER_LOOP:
    inc rcx
    cmp rcx, 5
    jz OK 
    cmp rax, [array+rcx*8]
    jle INNER_LOOP
    xchg rax, [array+rcx*8]
    jmp INNER_LOOP

OK:
    mov rcx, [cnt]
    mov [array+rcx*8], rax
    inc rcx
    jmp OUTER_LOOP

PRINT:
    mov rax, 0
    mov rcx, 2
    mov rax, [array+rcx*8]
    mov rdi, fmt_out
    mov rsi, rax
    call printf

END:
    mov rax, 0
    leave
    ret