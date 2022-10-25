let pythonBridge = require('python-bridge');
 
let python = pythonBridge();
 
var child = python.ex
`
import math
print(math.sqrt(9))
#print(input("Enter:"))
`
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    process.stdin.pipe(child.stdin);
    child.on('exit', () => process.exit());

python.end();