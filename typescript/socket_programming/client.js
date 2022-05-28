// (working)
const runner = require('child_process'); 
let sprintf = require('sprintf-js').sprintf;
var go_client_main = `
import subprocess
list_files_1 = subprocess.run(["goeval",'''\
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
'''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)
`
runner.execFile('python',["-c",go_client_main], (err, stdout, stderr) => { 
    console.log(stdout) // hi 
 });