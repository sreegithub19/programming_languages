// // Node.js socket client script
const net = require('net');

// Connect to a server @ port 9898
const client = net.createConnection({ port: 9898 }, () => {
  console.log('CLIENT: I connected to the server.');
  client.write('CLIENT: Hello this is client!');
  go_client();
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('CLIENT: I disconnected from the server.');
});

// (working)

//go_client();
function go_client(){
const runner = require('child_process'); 
let sprintf = require('sprintf-js').sprintf;
var go_client_main = `
const (
        SERVER_HOST = "localhost"
        SERVER_PORT = "9988"
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
`
runner.execFile('goeval',[go_client_main], (err, stdout, stderr) => { 
    console.log(stdout) // hi 
 });

}