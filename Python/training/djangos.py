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
print(input("Enter:"))
#if name == "__main__":
from django.core.management import execute_from_command_line

execute_from_command_line([sys.argv[0], 'runserver','7001'])  # to change port number


