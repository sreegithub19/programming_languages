 // working with workaround (file system)

const prompt = require('prompt-sync')();
const fs = require('fs');

fs.writeFile('mynewfile1.txt', prompt("Enter first name:")+"\n", function (err) {});
fs.appendFile('mynewfile1.txt', prompt("Enter last name:"), function (err) {});
// works -> fs.readFile('mynewfile1.txt', function (err,data) {console.log(data.toString())});

var p = require('child_process').execFile('goeval', [`
data, err := ioutil.ReadFile("mynewfile1.txt")
    if err != nil {
        log.Panicf("failed reading data from file: \%s", err)
    }
    fmt.Printf("\\nSize: \%d bytes", len(data))
    fmt.Printf("\\nData: \%s", data)
`]
,
  {timeout: 10000},   
(err, stdout, stderr) => { 
  console.log(stdout) // hi 
  //console.log(err)
}
);
