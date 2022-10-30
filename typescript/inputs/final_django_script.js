// https://stackoverflow.com/questions/59062414/nodejs-get-output-of-python-shell-to-send-back-to-client
var ps = require('python-shell'); 
const { spawn, execFile } = require('child_process');

let PythonShell = ps.PythonShell;
const runPy = async (code) => {
    const options = {
       mode: 'text',
       pythonOptions: ['-u'],
       args: [code],
    };
 
   // wrap it in a promise, and `await` the result
   const result = await new Promise((resolve, reject) => {
     PythonShell.run('script.py', options, (err, results) => {
       if (err) return reject(err);
       return resolve(results);
     });
   });
   console.log(result.stdout);
   return result;
 };

 runPy()
.then(
  x=>console.log("never happens, doesn't resolve")
  ,err=>console.warn("got rejected:",err)
);