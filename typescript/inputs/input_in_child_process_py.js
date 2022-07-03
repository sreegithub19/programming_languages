 // working fine
 
 // use str(${prompt()}) instead of input() for taking input in child processes

const prompt = require('prompt-sync')();

var p = require('child_process').execFile('python', ['-c',`
a = str(${prompt("Enter a:")})
print(int(a)+344) 
print(int(str(${prompt("Enter next:")}))+344)
import subprocess
list_files_1 = subprocess.run(["python","-c",'''\
print("Input value in child process:",str("${prompt()}")+"'!")
'''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)
`]
,
 // {timeout: 10000},   
(err, stdout, stderr) => { 
  console.log(stdout) // hi 
  //console.log(err)
}
);
