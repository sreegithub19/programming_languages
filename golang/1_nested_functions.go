package main

import (
	"fmt"
	"os/exec"
	"strconv"
)

func main() {
	var a int = 5
	var b int = 50
	nested := func() {
		fmt.Println("I am nested: " + strconv.Itoa(a+b))
		deeplyNested := func() {
			//fmt.Println("I am deeply nested: " + strconv.Itoa(a-b))
			var x int = 45
			var y int = 455
			/* equivalent to function string_concat(x,y) */
			string_concat :=
				`
            const runner = require('child_process'); 
            let sprintf = require('sprintf-js').sprintf;
            console.log("x+ y is:",` + strconv.Itoa(x+y) + `);
            function diff(a,b){return a-b}
            let z = diff(` +
					strconv.Itoa(x+y) + `,` + strconv.Itoa(x-y) + `)    // working
            console.log("z is:",z);
            `
			cmd := exec.Command("node", "-e", string_concat)
			stdout, err := cmd.Output()
			if err != nil {
				fmt.Println(err.Error())
				return
			}
			// Print the output
			fmt.Println(string(stdout))
		}
		deeplyNested()
		fmt.Println("I am nested: " + strconv.Itoa(a+b))
	}
	nested()
}
