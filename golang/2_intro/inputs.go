package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	fmt.Println("input text:")
	line, _ := bufio.NewReader(os.Stdin).ReadString('\n')
	fmt.Printf("%T\n", os.Stdin)
	fmt.Printf("%T\n", line)
	fmt.Println(line)
}
