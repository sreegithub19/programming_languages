#print(",".join([str(i**2) for i in [int(i) for i in input("Enter the list:").split(",")] if(i%2!=0)]))

# import subprocess
# list_files_1 = subprocess.run(["node","-e",'''

#         const runner = require('child_process'); 
#         let sprintf = require('sprintf-js').sprintf;
#         var python_string = `
# import numpy;
# import flask;
# print("Hi");
# print(2+5%5);
# `
#         runner.execFile('python',['-c',python_string], (err, stdout, stderr) => { 
#             console.log(stdout) // hi 
#         });
# '''],timeout=500);
# print("The exit code was: %d" % list_files_1.returncode);

import subprocess
list_files_1 = subprocess.run(["node","-e",
'''
//var exec = require("child_process").exec; 
const runner = require('child_process'); 
const phpString = ` 
echo "hi"; 
echo "hello"; 
 
echo '<!DOCTYPE html> 
<html> 
<body> 
<h2>An Unordered HTML List</h2> 
<ul> 
  <li>Coffee</li> 
  <li>Tea</li> 
  <li>Milk</li> 
</ul>   
<h2>An Ordered HTML List</h2> 
<script> 
alert(2); 
document.write("3+300000");   // this considers: 3+300000 (as int)  
document.write("<br>");     // this considers: "<br>" (as string) 
document.write(3+300000);   // this considers: 3+300000 (as int)  
alert("Hi");               // this considers: "Hi" (as string) 
document.write(2 === 3);       
</script> 
<ol> 
  <li>Coffee</li> 
  <li>Tea</li> 
  <li>Milk</li> 
</ol>  
</body> 
</html><br>'; 
 
$a = 2;                         // should put double-backslash before "$" to parse variables. 
echo $a; 
echo "<br>"; 
parse_str("first=value&arr[]=foo+bar&arr[]=baz", $output); 
echo $output['first'];  // value 
echo "\n"; 
echo $output['arr'][0]; // foo bar 
echo "\n"; 
echo $output['arr'][1]; // baz 
/******************************************************************/ 
/******************************************************************/ 
 
function my_callback($item) { 
  return strlen($item); 
} 
 
$strings = ["apple", "orange", "banana", "coconut"]; 
$lengths = array_map("my_callback", $strings); 
print_r($lengths); 
 
/******************************************************************/ 
; 
 
` // without <?php 
const express = require('express') 
const app = express() 
const port = 3000 
 
app.get('/', function(req, res){ 
  runner.execFile('php', ['-r', phpString], (err, stdout, stderr) => { 
    console.log(stdout) // hi 
    res.send(stdout); // hi 
 });}); 
 
app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`) 
});
'''],timeout=500);
print("The exit code was: %d" % list_files_1.returncode);



