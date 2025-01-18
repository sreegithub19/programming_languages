 ; Hello world assembly program
 ;                          
 ; Author: Pablo Corbalán   
 ; GitHub: https://github.com/pablocorbalann
 ; Date: 06/12/2020         
 ;
 ; Compiling the program    
 ; For compiling this hello world program you can use nasm and ld 
 ;
 ;   $ nasm -f elf32 -o hello.o hello.asm
 ;   $ ld -m elf_i386 -o hello hello.o 
 ;   $ ./hello

section        .text                   ; declare the .text section
global         _start                  ; has to be declared for the linker (ld)
_start:                                ; entry point for _start
    mov edx, len                       ; "invoke" the len of the message
    mov ecx, msg                       ; "invoke" the message itself

    mov ebx, 1                         ; set the file descriptor (fd) to stdout

    mov eax, 4                         ; system call for "write"   
    int 0x80                           ; call the kernel

    mov eax, 1                         ; system call for "exit"
    int 0x80                           ; call the kernel

section        .data                   ; here you declare the data
    msg        db "Hello world!"       ; the actual message to use
    len        equ $ -msg              ; get the size of the message