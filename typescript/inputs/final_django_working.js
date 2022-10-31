// https://stackoverflow.com/questions/59062414/nodejs-get-output-of-python-shell-to-send-back-to-client
// server running, but output from child process not working

// var ps = require('python-shell'); 
// const { spawn, execFile } = require('child_process');
// const prompt = require('prompt-sync')();

// let PythonShell = ps.PythonShell;
// const runPy = async (code) => {
//     const options = {
//        mode: 'text',
//        pythonOptions: ['-u'],
//        args: [prompt("Enter:"),'s'],
//     };
 
//    // wrap it in a promise, and `await` the result
//    const result = await new Promise((resolve, reject) => {
//      PythonShell.runString(`
// import sys    
// import pandas 
// from django.conf import settings 
// from django.urls import path 
// from django.http import HttpResponse 
 
// settings.configure( 
//  DEBUG=True,  # For debugging 
//  SECRET_KEY="a-bad-secret",  # Insecure! change this 
//  ROOT_URLCONF=__name__, 
// ) 
 
// sys.stdout.write(sys.argv[1])
// sys.stdout.flush()
// sys.stdout.write(sys.argv[1])
// sys.stdout.flush()

// def home(request): 
//  return HttpResponse("<h1>Welcome 7000!</h1>") 
// def next(request): 
//  return HttpResponse("Welcome to next 7000!") 
// def about(request): 
//  return HttpResponse("Welcome to about 7000!") 
// def then(request): 
//  return HttpResponse("Welcome to then 7000!") 
 
// urlpatterns = [ 
//  path("", home), 
//     path("next", next), 
//  path("about", about), 
//  path("then", then), 
// ] 
// #if name == "__main__": 
// from django.core.management import execute_from_command_line 

// execute_from_command_line([sys.argv[0], 'runserver','7000'])  # to change port number
//      `, options, (err, results) => {
//        if (err) return reject(err);
//        return resolve(results);
//      });
//    });
//    //console.log(result.stdout);
//    return result;
//  };

//  runPy()
// .then(
//   x=>console.log(x)
//   ,err=>console.warn("got rejected:",err)
// );

/////////////////////////////////////////////////////////////////////////////////////

// working fine (in Windows (personal laptop))

const { spawn } = require('child_process');
var ps = require('python-shell'); 

let options = ps.options;
let PythonShell = ps.PythonShell;
let proc_string = `
import sys      
import pandas 
from django.conf import settings 
from django.urls import path 
from django.http import HttpResponse 
 
settings.configure( 
 DEBUG=True,  # For debugging 
 SECRET_KEY="a-bad-secret",  # Insecure! change this 
 ROOT_URLCONF=__name__, 
) 
t = "432" 
print("Global t is:",t)
sys.stdout.write("\\r%d , %d\\n" %(2,3))
sys.stdout.writelines("\\r%d , %d\\n" %(2,3))
try:
  t = input("Enter:")
  u = print(input("Enter:"))
  sys.stdout.write(t+"\\n")
except:
  pass
def home(request):
  return HttpResponse("<h1>Welcome 7000!</h1>"+t) 
def next(request): 
 return HttpResponse("Welcome to next 7000!") 
def about(request): 
 return HttpResponse("Welcome to about 7000!") 
def then(request): 
 return HttpResponse("Welcome to then 7000!") 
 
urlpatterns = [ 
 path("", home), 
    path("next", next), 
 path("about", about), 
 path("then", then), 
] 
#if name == "__main__": 
from django.core.management import execute_from_command_line 
sys.stdout.write(str(int(t)+5)+"\\n")
print("t+5 is:",str(int(t)+5))
execute_from_command_line(['d', 'runserver','7000'])  # to change port number
`

var child = spawn("python", ["-c",proc_string]);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () => 
PythonShell.runString(proc_string,function (err) {
  if (err) throw err;
  else console.log('finished');
})
);


/////////////////////////////////////////////////////////////////////////////////////