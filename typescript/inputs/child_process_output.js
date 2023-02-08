const { spawn,exec } = require('child_process');

var child = exec(`
npm root -g
`);

function solution(){
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);
    child.on('exit', () => process.exit());
}

var a = solution();
console.log(typeof(a));


// /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules is obtained from "npm root -g"
// npm i -g @types/node
// tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types shell_java_.ts