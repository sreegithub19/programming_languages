var child_process = require('child_process');
const prompt = require('prompt-sync')();
var child_process = require('child_process');

const input = prompt();
console.log(typeof(input))
var a = "Hello"

var python_string = `
print("%s",${a})

`
child_process.exec("python",["-c",python_string], 
//{timeout:10000},
(err, stdout, stderr) => { 
    console.log(stdout)
 });

