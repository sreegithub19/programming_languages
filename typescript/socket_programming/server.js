// // Node.js socket server script
// https://mattsumme.rs/2015/nodejs-child-process-timeouts/
const net = require('net');

//var globe = {};
// Create a server object
// const server = net.createServer((socket) => {
//   socket.on('data', (data) => {
//     console.log(data.toString());
    
//   });

//   socket.write(`
//   SERVER: Hello! This is server speaking:
//   `);
//   socket.end('SERVER: Closing connection now.');
// }).on('error', (err) => {
//   console.error(err);
// });

// // Open server on port 9898
// server.listen(9898, () => {
//   //console.log('opened server on', server.address().port);
  
//   go_server();
//   //go_server_1();
// });
  go_server();
// function go_server_1(){
//   const runner = require('child_process'); 
//   let sprintf = require('sprintf-js').sprintf;
//   globe.val = `  
//    const (
//          SERVER_HOST = "localhost"
//          SERVER_PORT = "9988"
//          SERVER_TYPE = "tcp"
//      )
//          fmt.Println("Server Running...") 
//          fmt.Println("Listening on " + SERVER_HOST + ":" + SERVER_PORT)
//          fmt.Println("Waiting for client...")
//  `
//  runner.execFile("goeval",[globe.val], (err, stdout, stderr) => { 
//      console.log(stdout) // hi 
//   });
// }


//go_server()
function go_server(){
  const runner = require('child_process'); 
  let sprintf = require('sprintf-js').sprintf;
  var go_server_main_1 = `
 const (
         SERVER_HOST = "localhost"
         SERVER_PORT = "9898"
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

 var running = runner.execFile("goeval",[go_server_main_1], 
  {timeout: 10000},   
 (err, stdout, stderr) => { 
     console.log(stdout) // hi 
  }
  );

}
