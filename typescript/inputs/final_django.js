
// const { spawn } = require('child_process');
// var child = spawn("python3", ["-c",`
// import sys
// import pandas
// from django.conf import settings
// from django.urls import path
// from django.http import HttpResponse

// settings.configure(
// DEBUG=True,  # For debugging
// SECRET_KEY="a-bad-secret",  # Insecure! change this
// ROOT_URLCONF=__name__,
// )


// def home(request):
//     return HttpResponse("<h1>Welcome 7000!</h1>")
// def next(request):
//     return HttpResponse("Welcome to next 7000!")
// def about(request):
//     return HttpResponse("Welcome to about 7000!")
// def then(request):
//     return HttpResponse("Welcome to then 7000!")

// urlpatterns = [
// path("", home),
// path("next", next),
// path("about", about),
// path("then", then),
// ]

// #if __name__ == "__main__":
// from django.core.management import execute_from_command_line
// print(sys.argv[0])
// #execute_from_command_line([sys.argv[0], 'runserver','7001'])  # to change port number

// `,"runserver","7001"]);


// function cascade(){
// child.stdout.pipe(process.stdout);
// child.stderr.pipe(process.stderr);
// process.stdin.pipe(child.stdin);
// child.on('exit', () => process.exit());

// }
// // setTimeOut() performs a task after a delay of a certain predefined number of milliseconds.
// cascade();      

const { execFile } = require('child_process');
var child = execFile("python", ["-c",`
import os
import sys
from django.conf import settings
from django.core.management import execute_from_command_line
from django.http import HttpResponse 
from django.urls import path

fname = os.path.dirname(os.path.abspath("__file__"))[0]
urlpatterns = [path(r'', lambda r: HttpResponse('Hello, world!')),
path(r'next', lambda r: HttpResponse('Hello, world next!')),
]

# if __name__ == "__main__":
#     settings.configure(DEBUG=True, MIDDLEWARE_CLASSES=[], ROOT_URLCONF=fname)
#     execute_from_command_line([sys.argv[0], 'runserver'])
if not settings.configured:
    settings.configure(DEBUG=True, MIDDLEWARE_CLASSES=[], ROOT_URLCONF=fname)
execute_from_command_line([sys.argv[0], 'runserver'])
`]);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () => process.exit());