// // Node.js socket client script
// https://mattsumme.rs/2015/nodejs-child-process-timeouts/


const runner = require('child_process'); 
let sprintf = require('sprintf-js').sprintf;
var scala_client_main = `
object Hello {
    def main(args: Array[String]) = {
        println("Hello, world")
    }
}
`
runner.execFile('scala',['-e',scala_client_main],

  (err, stdout, stderr) => { 
    console.log(stdout) // hi 
    console.log(err)
 });
