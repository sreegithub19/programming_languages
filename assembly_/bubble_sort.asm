section .data
    array db 5, 3, 8, 4, 2, 7, 1, 6, 0  ; Array to be sorted (last element is 0 to mark the end)
    msg db 'Sorted array: ', 0           ; Message to print before the sorted array
    space db ' ', 0                      ; Space character
    newline db 10, 0                     ; Newline character

section .bss
    result resb 4                        ; Reserve 4 bytes for the ASCII result buffer (to handle multi-digit numbers)

section .text
    global _start                        ; Entry point for the linker

_start:
    ; Initialize pointers
    mov rsi, array                       ; rsi points to the start of the array

bubble_sort:
    mov rdi, array                       ; rdi points to the start of the array
    mov rcx, 0                           ; Reset the swap flag

inner_loop:
    mov al, [rdi]                        ; Load the current element into al
    cmp byte [rdi + 1], 0                ; Check if the next element is zero (end of array)
    je check_swap                        ; If yes, jump to check_swap
    mov bl, [rdi + 1]                    ; Load the next element into bl
    cmp al, bl                           ; Compare the current element with the next element
    jle next_element                     ; If current element <= next element, go to next_element

    ; Swap elements
    mov [rdi], bl                        ; Move the next element to the current position
    mov [rdi + 1], al                    ; Move the current element to the next position
    mov rcx, 1                           ; Set the swap flag

next_element:
    inc rdi                              ; Move to the next element
    jmp inner_loop                       ; Repeat the inner loop

check_swap:
    cmp rcx, 1                           ; Check if any swaps were made
    je bubble_sort                       ; If yes, repeat the bubble sort

    ; Print the sorted array
    mov rax, 1                           ; sys_write system call number (1 = write)
    mov rdi, 1                           ; file descriptor (1 = stdout)
    mov rsi, msg                         ; pointer to the message string
    mov rdx, 14                          ; length of the message string
    syscall                              ; invoke the system call

    mov rsi, array                       ; rsi points to the start of the sorted array

print_sorted_array:
    movzx eax, byte [rsi]                ; Load the current element into eax and zero-extend
    cmp eax, 0                           ; Check if the current element is zero (end of array)
    je end_program                       ; If yes, end the program

    ; Convert the number to ASCII string
    mov rdi, result + 3                  ; rdi points to the end of the result buffer
    mov rcx, 0                           ; Clear rcx (counter)

convert_loop:
    xor rdx, rdx                         ; Clear rdx
    div byte [ten]                       ; Divide eax by 10, quotient in eax, remainder in rdx
    add dl, '0'                          ; Convert remainder to ASCII
    dec rdi                              ; Move buffer pointer backwards
    mov [rdi], dl                        ; Store ASCII character in buffer
    inc rcx                              ; Increment counter
    test eax, eax                        ; Check if quotient is 0
    jnz convert_loop                     ; Repeat if quotient is not 0

    mov rax, 1                           ; sys_write system call number (1 = write)
    mov rdi, 1                           ; file descriptor (1 = stdout)
    mov rsi, rdi                         ; pointer to the start of the result string
    mov rdx, rcx                         ; length of the result string
    syscall                              ; invoke the system call

    ; Print a space character
    mov rax, 1                           ; sys_write system call number (1 = write)
    mov rdi, 1                           ; file descriptor (1 = stdout)
    mov rsi, space                       ; pointer to the space character
    mov rdx, 1                           ; length of the space character
    syscall                              ; invoke the system call

    inc rsi                              ; Move to the next element
    jmp print_sorted_array               ; Repeat the loop

end_program:
    ; Print a newline character to end the output
    mov rax, 1                           ; sys_write system call number (1 = write)
    mov rdi, 1                           ; file descriptor (1 = stdout)
    mov rsi, newline                     ; pointer to the newline character
    mov rdx, 1                           ; length of the newline character
    syscall                              ; invoke the system call

    ; Exit the program
    mov rax, 60                          ; sys_exit system call number
    xor rdi, rdi                         ; exit status (0)
    syscall                              ; invoke the system call

section .data
ten db 10                                ; Define a constant for the divisor in division