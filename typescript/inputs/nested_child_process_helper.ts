import { spawn,exec } from 'child_process';

var child3 : any = exec(`ts-node typescript/inputs/nested_child_process.ts`);

var child4 : any = exec(`
tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types typescript/inputs/nested_child_process.ts && node typescript/inputs/nested_child_process.js
`);

child3.stdout.pipe(process.stdout);
child3.stderr.pipe(process.stderr);
process.stdin.pipe(child3.stdin);
child3.on('exit', () => {
    child4.stdout.pipe(process.stdout);
    child4.stderr.pipe(process.stderr);
    process.stdin.pipe(child4.stdin);
    child4.on('exit', () => process.exit())
});





// /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules is obtained from "npm root -g"

// Working
// npm install --save-dev @types/node -g
// tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types typescript/inputs/nested_child_process.ts && node typescript/inputs/nested_child_process.js
// ts-node typescript/inputs/nested_child_process_helper.ts