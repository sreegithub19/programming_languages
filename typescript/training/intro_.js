// https://stackoverflow.com/questions/53376908/capture-input-in-the-child-process-after-spawn-in-node
// working


const { spawn, execFile } = require('child_process');
var child = 
execFile("python", ["-c",`
print("------------------------------------------------------")
print("Hi")
print(input())
print(input()+"\\n")
print(input()+"\\n")
print(int(input("Enter a number:"))+34)
a = input("Enter a string:")
print(a*2 + "Hello")
 
print("Exit")
`]);
 // {timeout: 10000},   
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () => process.exit());