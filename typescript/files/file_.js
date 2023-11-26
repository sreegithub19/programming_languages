 const runner = require('child_process'); 
  let sprintf = require('sprintf-js').sprintf;
  const prompt = require('prompt-sync')();
  var python_files = `
f = open("test.txt", 'r')

#To print the content of the whole file
#print(f.read())

#To read only one line
a = f.readline()
print(a)
print(a+"23")
print(f.readline())
print(f.readline().rstrip('\\n')+"23")
print(f.readlines()[-1])
`

 var running = runner.execFile("python",["-c",python_files], 
  {timeout: 1000000},   
 (err, stdout, stderr) => { 
     console.log(stdout) // hi 
     //console.log(err)
  }
  );


  