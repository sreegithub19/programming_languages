// pip install Django==2.2.16

// https://www.reddit.com/r/node/comments/at8uoi/how_to_call_python_program_with_std_input_in_node/
// only server running

var ps = require('python-shell'); 
const open = require('open'); 
const concurrently = require('concurrently'); 
const { spawn, execFile } = require('child_process');

let options = ps.options;
let PythonShell = ps.PythonShell;
options =  {
    'stdio':
        ['pipe', 'pipe', 'pipe', 'pipe'] // stdin, stdout, stderr, custom
}

var child = `
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
 
#print(input("Enter:"))
def home(request): 
 return HttpResponse("<h1>Welcome 7000!</h1>") 
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

execute_from_command_line([sys.argv[0], 'runserver','7000'])  # to change port number

`

// if(!PythonShell.runString(child))
// console.log("Not Working"); 
// else { 
//     console.log("Working"); 
// }

PythonShell.runString(child, options, function (err) {
  if (err) throw err;
  else console.log('finished');
});

// // if below is commented or uncommented, and above is PythonShell.runString(), then Django server runs continuously (without being able to take any input)
    // // if below is uncommented , and above is .execFile("python","-c","..."), then the Python script will only take input, Django server will not run (will show the "extra argument required" error)
    // child.stdout.pipe(process.stdout);
    // child.stderr.pipe(process.stderr);
    // process.stdin.pipe(child.stdin);
    // child.on('exit', () => {
    //     //setTimeout(function(){ 
    //         process.exit(); 
    //     //}, 20000);
    // });
