// workaround in tss.js

var child_process = require('child_process');
const prompt = require('prompt-sync')();

// const input = prompt();
// console.log(typeof(input))
//var a = "Hello"
//console.log(typeof(a))
//const python_string = `
// #import sys
// #a = sys.stdin.readline()
// #print(a+"2")
// #print("GoodBye!!",a)
//`
// child_process.execFile("python3",["-c",python_string], 
// {timeout:10000},
// (err, stdout, stderr) => { 
//     console.log(stdout)
//  });


var a = prompt("Enter a number:")
console.log(a+2);