var child_process = require('child_process');
let pythonBridge = require('python-bridge');
//let express2 = require('nodemon');
let python1 = pythonBridge();
const http = require('http');
//const open = require('open');
python1.ex`
import ast
a = int(input("Enter a:"))
print(a)
`
python1.end();

