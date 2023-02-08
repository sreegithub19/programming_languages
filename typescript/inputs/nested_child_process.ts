import { spawn,exec } from 'child_process';

var child3 : any = exec(`node -e "console.log(2)"`);
var child : any = exec(`npm root -g`);



child3.stdout.pipe(process.stdout);
child3.stderr.pipe(process.stderr);
process.stdin.pipe(child3.stdin);
child3.on('exit', () => {
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);
    child.on('exit', () => process.exit());
});





// /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules is obtained from "npm root -g"

// Working
// npm install --save-dev @types/node -g
// tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types typescript/inputs/nested_child_process.ts && node typescript/inputs/nested_child_process.js
