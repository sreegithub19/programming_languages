from subprocess import run

# list_files_2 = run(["python","-c",'''
# from subprocess import run
# list_files_1 = run(["goeval",\'\'\'
#  const (
#          SERVER_HOST = "localhost"
#          SERVER_PORT = "9988"
#          SERVER_TYPE = "tcp"
#      )
#      processClient := func(connection net.Conn) {
#          buffer := make([]byte, 1024)
#          mLen, err := connection.Read(buffer)
#          if err != nil {
#              fmt.Println("Error reading:", err.Error())
#          }
#          fmt.Println("Received: ", string(buffer[:mLen]))
#          _, err = connection.Write([]byte("Thanks! Got your message:" + string(buffer[:mLen])))
#          connection.Close()
#          fmt.Println("Listening on " + SERVER_HOST + ":" + SERVER_PORT)
#          fmt.Println("Server Running...")
#          fmt.Println("Waiting for client...")
#      }
#      fmt.Println("Server Running...")
#      server, err := net.Listen(SERVER_TYPE, SERVER_HOST+":"+SERVER_PORT)
#      if err != nil {
#          fmt.Println("Error listening:", err.Error())
#          os.Exit(1)
#      }
#      mains := func(){
#          defer server.Close()
#          for {
#             fmt.Println("Listening on " + SERVER_HOST + ":" + SERVER_PORT)
#             fmt.Println("Waiting for client...")
#              connection, err := server.Accept()
#              if err != nil {
#                  fmt.Println("Error accepting: ", err.Error())
#                  os.Exit(1)
#              }
#              fmt.Println("client connected")
#              go processClient(connection)
             
#          }
#      }   
     
#      mains()
#  \'\'\'],timeout=500)
# print("The exit code was: %d" % list_files_1.returncode)
# '''],timeout=500)
# print("The exit code was: %d" % list_files_2.returncode)


list_files_3 = run(["node","-e",'''
var express = require('express')
const runner = require('child_process'); 
var go_server_main_1 = `
from subprocess import run
print("Hi")
from flask import Flask
app=Flask('app')
@app.route('/')
def run_code_1():
    return \'\'\'
    <h1>Hello</h1>
    \'\'\'
app.run(host='0.0.0.0', port=8080)

`
runner.execFile("python",["-c",go_server_main_1], (err, stdout, stderr) => { 
     console.log(stdout) // hi 
  });
'''],timeout=500)
print("The exit code was: %d" % list_files_3.returncode)


# list_files_3 = run(["node","-e",'''
# var express = require('express')
# const runner = require('child_process'); 
# var go_server_main_1 = `
# from subprocess import run
# print("Hi")
# `
# runner.execFile("python",["-c",go_server_main_1], (err, stdout, stderr) => { 
#      console.log(stdout) // hi 
#   });
# '''],timeout=500)
# print("The exit code was: %d" % list_files_3.returncode)