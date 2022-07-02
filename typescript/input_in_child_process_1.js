 // use ${prompt()} instead of input() in child processes

const prompt = require('prompt-sync')();

var p = require('child_process').execFile('python', ['-c',`
a = str(${prompt("Enter a:")})
print(int(a)+344)
`]
,
//  {timeout: 1000000},   
(err, stdout, stderr) => { 
  console.log(stdout) // hi 
  //console.log(err)
}
);
