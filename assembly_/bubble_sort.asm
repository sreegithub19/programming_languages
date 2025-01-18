section .data
    array db 5, 3, 8, 6, 2       ; Array to be sorted
    len equ 5                    ; Length of the array
    newline db 0xA               ; Newline character (ASCII 10)

section .bss
    buffer resb 4                ; Buffer to store ASCII representation of numbers

section .text
    global _start

_start:
    ; Sort the array using bubble sort
    mov rbx, 0                    ; outer loop counter (i)
    
outer_loop:
    mov rcx, len                  ; Set length for inner loop
    sub rcx, 1
    mov rdx, rbx                  ; Set inner loop counter (j)
    
inner_loop:
    ; Compare array[j] and array[j+1]
    mov rsi, array                ; Load base address of array
    mov al, [rsi + rdx]           ; Load array[j]
    mov bl, [rsi + rdx + 1]       ; Load array[j+1]
    cmp al, bl
    jle no_swap                   ; If array[j] <= array[j+1], no swap

    ; Swap array[j] and array[j+1]
    mov [rsi + rdx], bl           ; array[j] = array[j+1]
    mov [rsi + rdx + 1], al       ; array[j+1] = array[j]
    
no_swap:
    inc rdx
    cmp rdx, rcx
    jl inner_loop

    inc rbx
    cmp rbx, len
    jge print_array

    jmp outer_loop

print_array:
    ; Print the sorted array
    mov rbx, 0                    ; Index for array

print_loop:
    mov rsi, array                ; Load base address of array
    movzx rax, byte [rsi + rbx]   ; Load array[rbx] into rax (zero-extend to 64 bits)
    call print_number             ; Print the number
    mov rax, 1                    ; sys_write
    mov rdi, 1                    ; File descriptor (stdout)
    mov rsi, newline              ; Address of newline character
    mov rdx, 1                    ; Length of newline character
    syscall                       ; Print newline

    inc rbx
    cmp rbx, len
    jl print_loop

    jmp done

print_number:
    ; Convert number in RAX to ASCII and store in buffer
    mov rdi, buffer               ; Address of buffer
    mov rcx, 0                    ; Digit counter

convert_loop:
    xor rdx, rdx                  ; Clear RDX (remainder)
    mov rbx, 10                   ; Divisor (base 10)
    div rbx                       ; RAX = RAX / 10, RDX = RAX % 10
    add dl, '0'                   ; Convert remainder to ASCII
    dec rdi                       ; Move buffer pointer backward
    mov [rdi], dl                 ; Store ASCII character in buffer
    inc rcx                       ; Increment digit counter
    test rax, rax                 ; Check if RAX is 0
    jnz convert_loop              ; Repeat if RAX != 0

    ; Write the number to stdout
    mov rax, 1                    ; sys_write
    mov rdi, 1                    ; File descriptor (stdout)
    mov rsi, rdi                  ; Address of buffer
    mov rdx, rcx                  ; Length of the number
    syscall
    ret

done:
    ; Exit program
    mov rax, 60                   ; sys_exit
    xor rdi, rdi                  ; exit status 0
    syscall
