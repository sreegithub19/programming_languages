// // Node.js socket server script
// https://mattsumme.rs/2015/nodejs-child-process-timeouts/

  const { spawn , execFile } = require('child_process'); 
  var go_server_main_1 = `
 const (
         SERVER_HOST = "localhost"
         SERVER_PORT = "9897"
         SERVER_TYPE = "tcp"
     )

    fmt.Println("Server Running...") 
    fmt.Println("Listening on " + SERVER_HOST + ":" + SERVER_PORT)
    fmt.Println("Waiting for client...")

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
     
     server, err := net.Listen(SERVER_TYPE, SERVER_HOST+":"+SERVER_PORT)
     if err != nil {
         fmt.Println("Error listening:", err.Error())
         os.Exit(1)
     }
     
     mains := func(){   
         defer server.Close()
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
 `

/*
 var running = runner.execFile("goeval",[go_server_main_1], 
  {timeout: 1000000},   
 (err, stdout, stderr) => { 
     console.log(stdout) // hi 
     //console.log(err)
  }
  );
*/
var child = execFile('goeval',[go_server_main_1]);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () => process.exit());  