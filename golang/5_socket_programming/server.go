package main

import (
	"fmt"
	"net"
	"os"
)

func main() {
	const (
		SERVER_HOST = "localhost"
		SERVER_PORT = "9988"
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
		fmt.Println("Listening on " + SERVER_HOST + ":" + SERVER_PORT)
		fmt.Println("Server Running...")
		fmt.Println("Waiting for client...")
	}

	server, err := net.Listen(SERVER_TYPE, SERVER_HOST+":"+SERVER_PORT)
	if err != nil {
		fmt.Println("Error listening:", err.Error())
		os.Exit(1)
	}
	mains := func() {
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
}
