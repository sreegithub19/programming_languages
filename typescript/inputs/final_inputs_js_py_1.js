// https://stackoverflow.com/questions/53376908/capture-input-in-the-child-process-after-spawn-in-node
// working

    // Use && (double ampersand) for sequential execution.
    // Use & (single ampersand) for parallel execution.

const ab = (() => {

    console.log("final_inputs_js_py_1 part-1.js")
const { spawn } = require('child_process');
var child = spawn("python3", ["-c",`
import subprocess
list_files_1 = subprocess.run(["node","-e",'''\

const { spawn } = require('child_process');
var child = spawn("python3", ["-c",\`
print("------------------------------------------------------")
print("Hi")
print(input())
print(input()+"\\\n")
print(input()+"\\\n")
print(int(input("Enter a number:"))+34)
a = input("Enter a string:")
print(a*2 + "Hello")
import sys
 
for line in sys.stdin:
    if 'q' == line.rstrip():
        break
    print(f'Input : {line}')
 
print("Exit")
\`]);
var child2 = spawn("python3", ["-c",\`
print("------------------------------------------------------")
import sys
 
for line in sys.stdin:
    if 'q' == line.rstrip():
        break
    print(f'Input : {line}')
 
print("Exit")
\`
]);
var child1 = spawn("python3", ["-c",\`
print("------------------------------------------------------")
a = input("Enter a  number:")
b = input("Enter a  string:")
print(a+b)
import subprocess
list_files_1 = subprocess.run(["python3","-c",\\'\'\'\
print("Hi from nested child process")
print(input("Input in nested child process:"))
\\'\'\'],timeout=500)
print("The exit code was: \%\d" \% list_files_1.returncode)
\`
]);
var child3 = spawn("goeval", [\`
    fmt.Println("------------------------------------------------")
    fmt.Println("Enter Your First Name: ")
  
    // var then variable name then variable type
    var first string
  
    // Taking input from user
    fmt.Scanln(&first)
    fmt.Println("Enter Second Last Name: ")
    var second string
    fmt.Scanln(&second)
  
    // Print function is used to
    // display output in the same line
    fmt.Print("Your Full Name is: ")
  
    // Addition of two string
    fmt.Print(first + " " + second+"\\\n")
\`
]);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () => {
    
    child2.stdout.pipe(process.stdout);
    child2.stderr.pipe(process.stderr);
    process.stdin.pipe(child2.stdin);
    child2.on('exit', () => {
        child1.stdout.pipe(process.stdout);
        child1.stderr.pipe(process.stderr);
        process.stdin.pipe(child1.stdin);
        child1.on('exit', () => {
                child3.stdout.pipe(process.stdout);
                child3.stderr.pipe(process.stderr);
                process.stdin.pipe(child3.stdin);
                child3.on('exit', () => process.exit());
        })
    })
})
// setTimeOut() performs a task after a delay of a certain predefined number of milliseconds.


'''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)
`
]);

////////////////////////////////////////////////////////////////
console.log("final_inputs_js_py_1 part-2.js")
// const { spawn } = require('child_process');
var child1 = spawn("python3", ["-c",`
import subprocess
list_files_1 = subprocess.run(["node","-e",'''\

const { spawn } = require('child_process');
var child = spawn("python3", ["-c",\`
print("------------------------------------------------------")
print("Hi")
print(input())
print(input()+"\\\n")
print(input()+"\\\n")
print(int(input("Enter a number:"))+34)
a = input("Enter a string:")
print(a*2 + "Hello")
import sys
 
for line in sys.stdin:
    if 'q' == line.rstrip():
        break
    print(f'Input : {line}')
 
print("Exit")
\`]);
var child2 = spawn("python3", ["-c",\`
print("------------------------------------------------------")
import sys
 
for line in sys.stdin:
    if 'q' == line.rstrip():
        break
    print(f'Input : {line}')
 
print("Exit")
\`
]);
var child1 = spawn("python3", ["-c",\`
print("------------------------------------------------------")
a = input("Enter a  number:")
b = input("Enter a  string:")
print(a+b)
import subprocess
list_files_1 = subprocess.run(["python3","-c",\\'\'\'\
print("Hi from nested child process")
print(input("Input in nested child process:"))
\\'\'\'],timeout=500)
print("The exit code was: \%\d" \% list_files_1.returncode)
\`
]);
var child3 = spawn("goeval", [\`
    fmt.Println("------------------------------------------------")
    fmt.Println("Enter Your First Name: ")
  
    // var then variable name then variable type
    var first string
  
    // Taking input from user
    fmt.Scanln(&first)
    fmt.Println("Enter Second Last Name: ")
    var second string
    fmt.Scanln(&second)
  
    // Print function is used to
    // display output in the same line
    fmt.Print("Your Full Name is: ")
  
    // Addition of two string
    fmt.Print(first + " " + second+"\\\n")
\`
]);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () => {
    
    child2.stdout.pipe(process.stdout);
    child2.stderr.pipe(process.stderr);
    process.stdin.pipe(child2.stdin);
    child2.on('exit', () => {
        child1.stdout.pipe(process.stdout);
        child1.stderr.pipe(process.stderr);
        process.stdin.pipe(child1.stdin);
        child1.on('exit', () => {
                child3.stdout.pipe(process.stdout);
                child3.stderr.pipe(process.stderr);
                process.stdin.pipe(child3.stdin);
                child3.on('exit', () => process.exit());
        })
    })
})
// setTimeOut() performs a task after a delay of a certain predefined number of milliseconds.


'''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)
`
]);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () => {
    child1.stdout.pipe(process.stdout);
    child1.stderr.pipe(process.stderr);
    process.stdin.pipe(child1.stdin);
    child1.on('exit', () => process.exit());   
});



})()   
