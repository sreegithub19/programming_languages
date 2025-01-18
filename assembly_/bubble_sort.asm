section .data
    array db 5, 3, 8, 6, 2       ; Array to be sorted
    len equ 5                     ; Length of the array

section .text
    global _start

_start:
    ; Sort the array using bubble sort
    mov rbx, 0                    ; outer loop counter (i)
    
.outer_loop:
    mov rcx, len                  ; Set length for inner loop
    sub rcx, 1
    mov rdx, rbx                  ; Set inner loop counter (j)
    
.inner_loop:
    ; Compare array[j] and array[j+1]
    mov rsi, array                ; Load base address of array
    mov al, [rsi + rdx]           ; Load array[j]
    mov bl, [rsi + rdx + 1]       ; Load array[j+1]
    cmp al, bl
    jle .no_swap                  ; If array[j] <= array[j+1], no swap

    ; Swap array[j] and array[j+1]
    mov [rsi + rdx], bl           ; array[j] = array[j+1]
    mov [rsi + rdx + 1], al       ; array[j+1] = array[j]
    
.no_swap:
    inc rdx
    cmp rdx, rcx
    jl .inner_loop

    inc rbx
    cmp rbx, len
    jge .done

    jmp .outer_loop

.done:
    ; Exit program
    mov rax, 60                   ; sys_exit
    xor rdi, rdi                  ; exit status 0
    syscall
