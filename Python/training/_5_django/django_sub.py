# error due to missing extra parameter
import subprocess
import sys
django_string = '''print(input("Enter a number:"))

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

t = "3242"
def home(request):
    return HttpResponse("<h1>Welcome 7000!{t}</h1>")
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
print(input("Enter:"))
#if name == "__main__":
from django.core.management import execute_from_command_line

execute_from_command_line(['d', 'runserver','7001'])  # to change port number
'''
list_files_1 = subprocess.run(["python","-c",django_string,"",
]);
print("The exit code was: %d" % list_files_1.returncode);
print(list_files_1.stdout);
print(list_files_1.stderr);
