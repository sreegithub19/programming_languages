 // working with workaround (using file system)

const prompt = require('prompt-sync')();
const fs = require('fs');

fs.writeFile('/tmp/text', prompt("Enter first name:")+"\n", function (err) {});
fs.appendFile('/tmp/text', prompt("Enter last name:"), function (err) {});
// works -> 
  // fs.readFile('/tmp/text', function (err,data) {console.log(data.toString())});

var p = require('child_process').execFile('goeval', [`
data, err := ioutil.ReadFile("/tmp/text")
    if err != nil {
        log.Panicf("failed reading data from file: \%s", err)
    }
    fmt.Printf("\\nSize: \%d bytes", len(data))
    fmt.Printf("\\nData: \%s\\n", data)
    //fmt.Println()
    lines := strings.Split(string(data), "\\n")
    for i, line := range lines {
      fmt.Printf("\%d line: \%s\\n",i+1,line)
    }
`]
,
  {timeout: 10000},   
(err, stdout, stderr) => { 
  console.log(stdout) // hi 
  //console.log(err)
}
);
