import os
import sys
from django.conf import settings
from django.core.management import execute_from_command_line
from django.http import HttpResponse
from django.urls import path

fname = os.path.splitext(os.path.basename(__file__))[0]
urlpatterns = [path(r'', lambda r: HttpResponse('Hello, world!')),
path(r'next', lambda r: HttpResponse('Hello, world next!')),
]

# if __name__ == "__main__":
#     settings.configure(DEBUG=True, MIDDLEWARE_CLASSES=[], ROOT_URLCONF=fname)
#     execute_from_command_line([sys.argv[0], 'runserver'])
if not settings.configured:
    settings.configure(DEBUG=True, MIDDLEWARE_CLASSES=[], ROOT_URLCONF=fname)
execute_from_command_line([sys.argv[0], 'runserver','7001'])