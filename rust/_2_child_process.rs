use std::process::Command;

fn main() {
    // multi line string
let output1 = Command::new({
    "ls"
})
//.args(["&&","python","-c","'hi'"])
.output().expect("failed to execute process");                     

println!("status: {}", output1.status);
println!("stdout: {}", String::from_utf8_lossy(&output1.stdout));
println!("stderr: {}", String::from_utf8_lossy(&output1.stderr));


//assert!(output1.status.success());

}