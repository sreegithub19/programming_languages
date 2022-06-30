var child_process = require('child_process');
const prompt = require('prompt-sync')();

// const input = prompt();
// console.log(typeof(input))
var a = "Hello"
console.log(typeof(a))
const python_string = `
print("GoodBye!!")
`
child_process.execFile("python3",["-c",python_string], 
{timeout:10000},
(err, stdout, stderr) => { 
    console.log(stdout)
 });

