use std::process::{Command, Stdio};
use std::io::{stdin,stdout,Write};

fn main() {
    // multi line string
let output1 = Command::new({
"ls"
})
.args(&["-l","-a"])
.stdout(Stdio::piped())
.output().expect("failed to execute process");

let output2 = Command::new({
"python"
})
.args(&["-c","print(2)"])
.stdout(Stdio::piped())
.output().expect("failed to execute process"); 

let mut s = String::new();
println!("Enter the number of apples :");
let _=stdout().flush();
stdin().read_line(&mut s).expect("Did not enter a correct string");
if let Some('\n')=s.chars().next_back() {s.pop();}
if let Some('\r')=s.chars().next_back() {s.pop();}

let output3 = Command::new({
"python"
})
.args(&["-c",&("print(str(int(".to_owned()+&s+" + 55)) ,'apples on the tree from Python')")])
.stdin(Stdio::piped())
.stdout(Stdio::piped())
.output().expect("failed to execute process"); 


let mut v = vec![output1, output2,output3];
  for vv in v.iter() {
    println!("status: {}", vv.status);
    println!("stdout: {}", String::from_utf8_lossy(&vv.stdout));
    println!("stderr: {}", String::from_utf8_lossy(&vv.stderr));
  }

//assert!(output1.status.success());

}