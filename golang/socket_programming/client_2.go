package main

import (
	"bufio"
	"fmt"
	"net"
	"strconv"
	"sync"
	"time"
)

func main() {
	var (
		connected     bool
		connectedSync sync.Mutex
	)

	receiveData := func(conn net.Conn) {
		for {
			message, err := bufio.NewReader(conn).ReadString('\n')
			if err != nil {
				fmt.Println(conn.RemoteAddr().String() + ": disconnected")
				conn.Close()
				connectedSync.Lock()
				connected = false
				connectedSync.Unlock()
				fmt.Println(conn.RemoteAddr().String() + ": end receiving data")
				return
			}
			fmt.Print(conn.RemoteAddr().String() + ": received " + message)
		}
	}

	sendData := func(conn net.Conn) {
		i := 0
		for {
			_, err := fmt.Fprintf(conn, strconv.Itoa(i)+". data from client\n")
			i++
			if err != nil {
				fmt.Println(conn.RemoteAddr().String() + ": end sending data")
				return
			}
			time.Sleep(time.Duration(1) * time.Second)
		}
	}

	mains := func() {
		fmt.Println("Client started...")
		for {
			connectedSync.Lock()
			alreadyConnected := connected
			connectedSync.Unlock()
			if !alreadyConnected {
				conn, err := net.Dial("tcp", "127.0.0.1:8000")
				if err != nil {
					fmt.Println(err.Error())
					time.Sleep(time.Duration(5) * time.Second)
					continue
				}
				fmt.Println(conn.RemoteAddr().String() + ": connected")
				connectedSync.Lock()
				connected = true
				connectedSync.Unlock()
				go sendData(conn)
				go receiveData(conn)
			}
			time.Sleep(time.Duration(5) * time.Second)
		}
	}
	mains()

}
