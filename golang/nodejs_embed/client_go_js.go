// working

package main

import (
	"fmt"
	"os/exec"
)

func main() {
	arg := "node"
	arg1 := `-e`

	arg2 := `
			const runner = require('child_process'); 
			let sprintf = require('sprintf-js').sprintf;

			var go_client_main = ` + "`" + `

			const (
					SERVER_HOST = "localhost"
					SERVER_PORT = "9989"
					SERVER_TYPE = "tcp"
				)

				connection, err := net.Dial(SERVER_TYPE, SERVER_HOST+":"+SERVER_PORT)
				if err != nil {
					panic(err)
				}
				///send some data
				_, err = connection.Write([]byte("Hello Server! Greetings."))
				buffer := make([]byte, 1024)
				mLen, err := connection.Read(buffer)
				if err != nil {
					fmt.Println("Error reading:", err.Error())
				}
				fmt.Println("Received: ", string(buffer[:mLen]))
				defer connection.Close()
			` + "`" + `

			runner.execFile('goeval',[go_client_main], (err, stdout, stderr) => { 
				console.log(stdout) // hi 
			});

	`

	cmd := exec.Command(arg, arg1, arg2)
	stdout, err := cmd.Output()

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	// Print the output
	fmt.Println(string(stdout))
}
