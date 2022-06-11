#print(",".join([str(i**2) for i in [int(i) for i in input("Enter the list:").split(",")] if(i%2!=0)]))

import subprocess
list_files_1 = subprocess.run(["node","-e",'''

        const runner = require('child_process'); 
        let sprintf = require('sprintf-js').sprintf;
        var python_string = `
import numpy;
import flask;
print("Hi");
print(2+5%5);
`
        runner.execFile('python',['-c',python_string], (err, stdout, stderr) => { 
            console.log(stdout) // hi 
        });
'''],timeout=500);
print("The exit code was: %d" % list_files_1.returncode);