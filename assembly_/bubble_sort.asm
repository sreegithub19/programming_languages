section .data
    array db 5, 3, 8, 6, 2       ; Array to be sorted
    len equ 5                     ; Length of the array
    newline db 10                 ; Newline character (for formatting)

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
    ; Print the sorted array
    mov rsi, array                ; Load base address of array
    mov rcx, len                  ; Set length of array
    
.print_loop:
    mov al, [rsi]                 ; Load element from array
    add al, '0'                   ; Convert to ASCII ('0' = 48 in ASCII)
    mov rdi, 1                    ; File descriptor (stdout)
    mov rdx, 1                    ; Length (1 byte per character)
    mov rax, 1                    ; sys_write system call
    syscall                       ; Call sys_write to print the number

    ; Print space between numbers
    mov rsi, space                ; Load space character
    mov rax, 1                    ; sys_write system call
    mov rdi, 1                    ; File descriptor (stdout)
    mov rdx, 1                    ; Length (1 byte per space)
    syscall                       ; Call sys_write

    inc rsi                        ; Move to the next number in the array
    loop .print_loop               ; Repeat for all elements

    ; Print newline after the array
    mov rsi, newline
    mov rax, 1
    mov rdi, 1
    mov rdx, 1
    syscall

    ; Exit program
    mov rax, 60                   ; sys_exit system call
    xor rdi, rdi                  ; exit status 0
    syscall

section .data
    space db ' '                  ; Space between numbers
