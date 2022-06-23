// // Node.js socket client script
// https://mattsumme.rs/2015/nodejs-child-process-timeouts/

go_client();
function go_client(){
const runner = require('child_process'); 
let sprintf = require('sprintf-js').sprintf;
var go_client_main = `
const (
        SERVER_HOST = "localhost"
        SERVER_PORT = "9899"
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
runner.execFile('goeval',[go_client_main],

  (err, stdout, stderr) => { 
    console.log(stdout) // hi 
    console.log(err)
 });


}