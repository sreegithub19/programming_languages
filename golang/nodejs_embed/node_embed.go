// working

package main

import (
	"fmt"
	"os/exec"
)

func main() {
	arg := "node"
	arg1 := `-e`

	arg2 := `

  var {PythonShell} = require('python-shell');
  const open = require('open');
  const concurrently = require('concurrently');
  let pythonBridge = require('python-bridge');
  let python1 = pythonBridge();

  // python1.ex` + "`" + `
  // from flask import Flask

  // app=Flask('app')
  // @app.route('/')
  // def run_code_1():
  //     return "<!DOCTYPE html"+"<html>" + "<head>" + "<style>" + "h1 {color: blue;}" + "h2 {color: #ff0000;}" + "h3 {color: yellow}" + "p {border: 2px solid powderblue}" + "body {color:#000; font-family:times; margin: 4px; }" + "pre {font : 10px monaco; color : black; background-color : #fafafa; }" + "</style>" + "</head>" + "<body>" + "<h1>Welcome!</h1>" + "<h2>This is an H2 header</h2>" + "<h3>This is an H3 header</h3>"+"<script>document.write('This is script!<br>');document.write(2+3/1);alert(2+3);</script>" + "<p>This is some sample text</p>" + "<p style='border: 2px solid powderblue;'><a href='http://devdaily.com/blog/'>devdaily blog (link)</a></p>" + "</body>"
  // app.run(host='127.0.0.1', port=8080)
  // ` + "`" + `;
  // python1.end();

  if(!PythonShell.runString(` + "`" + `
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
def home(request):
    return HttpResponse("<h1>Welcome 7001!</h1>")
def next(request):
    return HttpResponse("Welcome to next 7001!")
def about(request):
    return HttpResponse("Welcome to about 7001!")
def then(request):
    return HttpResponse("Welcome to then 7001!")
urlpatterns = [
 path("", home),
 path("next", next),
 path("about", about),
 path("then", then),
]
#if name == "__main__":
from django.core.management import execute_from_command_line
execute_from_command_line([sys.argv[0], 'runserver','7001'])  # to change port number
` + "`" + `
))
console.log("Not Working");
else {
 console.log("Working");
 open('http://localhost:7001/');
// open('http://localhost:7001/next');
// open('http://localhost:7001/about');
// open('http://localhost:7001/then');
}
	`

	cmd := exec.Command(arg, arg1, arg2)
	stdout, err := cmd.Output()

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	// Print the output
	fmt.Println(string(stdout))
}
