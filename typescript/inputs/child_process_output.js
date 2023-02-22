// Reference: https://stackoverflow.com/questions/36934749/how-to-get-the-output-of-a-spawned-child-process-in-node-js

const { spawn,exec } = require('child_process');

var output = ""
var child = exec(`
npm root -g
`);
var child1 = exec(`
npm root -g
`);

function solution(){
    child.stdout.pipe(process.stdout);
    child.stdout.on('data',function (data) {console.log('"npm root -g" command output: ' + data);output=data;console.log("global.output from inside function is: "+output);});
    child.stderr.on('data', function (data) {console.log('stderr: ' + data);});
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);
    child.on('exit', () => process.exit());

    child1.stdout.pipe(process.stdout);
    child1.stdout.on('data',function (data) {console.log('"npm root -g" command output: ' + data);output=data;console.log("global.output from inside function is: "+output);});
    child1.stderr.on('data', function (data) {console.log('stderr: ' + data);});
    child1.stderr.pipe(process.stderr);
    process.stdin.pipe(child1.stdin);
    child1.on('exit', () => process.exit());
};

// console.log("b is:",b) // undefined

solution()
//console.log("global.output is: "+output);
console.log(typeof(solution()));
console.log(child.stdin.toString());
console.log(("solution():",solution()));
console.log(child.stdout.toString());
console.log(process.stdout.toString());


const ab = (() => {

    child.stdout.on('data',function (data) {
        console.log('Final "npm root -g" command output: ' + data);
        output=data;
        q = output.trim() + "--/--ergrgg"
        a = output.trim() + "--/--ergrgga"
        console.log("global.output from inside function is: "+output);
        console.log("appended string:"+q);
    });
    child.stdout.on('data',function (data) {
        console.log("q from outside:"+q)
    });
    child.stdout.on('data',function (data) {
        console.log("a from outside:"+a)
    });
    child.stdout.on('data',function (data) {
        console.log("q+a from outside:"+(q+a))
    });

    child1.stdout.on('data',function (data) {
        console.log('Final1 "npm root -g" command output: ' + data);
        output=data;
        q = output.trim() + "--/--ergrgg1"
        a = output.trim() + "--/--ergrgga1"
        console.log("global.output from inside function is: "+output);
        console.log("appended1 string:"+q);
    });
    child1.stdout.on('data',function (data) {
        console.log("q1 from outside:"+q)
    });
    child1.stdout.on('data',function (data) {
        console.log("a1 from outside:"+a)
    });
    child1.stdout.on('data',function (data) {
        console.log("q1+a1 from outside:"+(q+a))
    });

})()

console.log("ab is:"+ab)
console.log("q is:"+global.q)




// /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules is obtained from "npm root -g"
// npm i -g @types/node
// tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types shell_java_.ts


/*
    child.stdout.on('data',function (data) {
        console.log('Final "npm root -g" command output: ' + data);
        output=data;
        var qq = output.trim() + "--/--ergrgg"
        console.log("global.output from inside function is: "+output);
        console.log("appended string from nested function:"+qq);
    });
*/