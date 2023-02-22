// Reference: https://stackoverflow.com/questions/36934749/how-to-get-the-output-of-a-spawned-child-process-in-node-js

const { spawn,exec } = require('child_process');

var output = ""
var child = exec(`
npm root -g
`);

function solution(){
    child.stdout.pipe(process.stdout);
    child.stdout.on('data',function (data) {console.log('"npm root -g" command output: ' + data);output=data;console.log("global.output from inside function is: "+output);});
    child.stderr.on('data', function (data) {console.log('stderr: ' + data);});
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);
    child.on('exit', () => process.exit());
};

// console.log("b is:",b) // undefined

solution()
console.log("global.output is: "+output);
console.log(typeof(solution()));
console.log(child.stdin.toString());
console.log(("solution():",solution()));
console.log(child.stdout.toString());
console.log(process.stdout.toString());
child.stdout.on('data',function (data) {console.log('Final "npm root -g" command output: ' + data);output=data;console.log("global.output from inside function is: "+output);});


// /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules is obtained from "npm root -g"
// npm i -g @types/node
// tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types shell_java_.ts
