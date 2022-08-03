var _a = require('child_process'), spawn = _a.spawn, execFile = _a.execFile;
var child = execFile("python", ["-c", "\nprint(\"------------------------------------------------------\")\nprint(\"Hi\")\nprint(input())\nprint(input()+\"\\n\")\nprint(input()+\"\\n\")\nprint(int(input(\"Enter a number:\"))+34)\na = input(\"Enter a string:\")\nprint(a*2 + \"Hello\")\n \nprint(\"Exit\")\n"]);
// {timeout: 10000},   
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', function () { return process.exit(); });
