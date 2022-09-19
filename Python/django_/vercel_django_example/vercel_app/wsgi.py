"""
WSGI config for vercel_app project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/

In case of "Application crashed" error:
      (Check logs) https://vercel.com/sreegithub19/vercel-django-example/C3yDuT4LSwyDaT9gG4iuVekHDNae/functions
      Solution: https://stackoverflow.com/questions/73706065/missing-variable-handler-or-app-in-file-project-wsgi-py
  
"""

import os

from django.core.wsgi import get_wsgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vercel_app.settings')
application = get_wsgi_application()
app = application
