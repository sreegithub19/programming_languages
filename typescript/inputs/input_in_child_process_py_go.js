 // not working

const prompt = require('prompt-sync')();
const fs = require('fs');


var p = require('child_process').execFile('python', ["-c",`
# not working

import subprocess
file1 = open("/tmp/text", "w") 
file1.write(str("${prompt("Enter first name:")}")+"\n")
file1.write(str("${prompt("Enter last name:")}")+"\n")
file1.close()

list_files_1 = subprocess.run(["goeval",'''\
data, err := ioutil.ReadFile("/tmp/text")
    if err != nil {
        log.Panicf("failed reading data from file: %\s", err)
    }
    fmt.Printf("\nSize: %\d bytes", len(data))
    fmt.Printf("\nData: %\s\n", data)
    //fmt.Println()
    lines := strings.Split(string(data), "\n")
    for i, line := range lines {
      fmt.Printf("%\d line: %\s\n",i+1,line)
    }
'''],timeout=500)
print("The exit code was: %\d" % list_files_1.returncode)

`]
,
  //{timeout: 10000},   
(err, stdout, stderr) => { 
  console.log(stdout) // hi 
  console.log(err)
}
);
