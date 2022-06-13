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

 // (working)

const runner = require('child_process'); 

var go_server_main_1 = ` + "`" + `
	const (
		SERVER_HOST = "localhost"
		SERVER_PORT = "9989"
		SERVER_TYPE = "tcp"
	)

	processClient := func(connection net.Conn) {
		buffer := make([]byte, 1024)
		mLen, err := connection.Read(buffer)
		if err != nil {
			fmt.Println("Error reading:", err.Error())
		}
		fmt.Println("Received: ", string(buffer[:mLen]))
		_, err = connection.Write([]byte("Thanks! Got your message:" + string(buffer[:mLen])))
		connection.Close()
	}

	mains := func(){

		fmt.Println("Server Running...")
		server, err := net.Listen(SERVER_TYPE, SERVER_HOST+":"+SERVER_PORT)
		if err != nil {
			fmt.Println("Error listening:", err.Error())
			os.Exit(1)
		}
		defer server.Close()
		fmt.Println("Listening on " + SERVER_HOST + ":" + SERVER_PORT)
		fmt.Println("Waiting for client...")

		for {
			connection, err := server.Accept()
			if err != nil {
				fmt.Println("Error accepting: ", err.Error())
				os.Exit(1)
			}
			fmt.Println("client connected")
			go processClient(connection)
		}
	}	

	mains()

` + "`" + `

runner.execFile("goeval",[go_server_main_1], (err, stdout, stderr) => { 
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
