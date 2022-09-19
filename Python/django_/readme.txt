1. vercel-django-example
https://jay-hale.medium.com/django-on-vercel-in-30-minutes-e69eed15b616#:~:text=First%2C%20add%20a%20Vercel%20configuration,vercel%2Dpython%2Dwsgi%20builder.
    1. mkdir vercel_django_example
    2. cd vercel_django_example
    3. pip3 install Django
    4. django-admin startproject vercel_app .      (dot is required)
    5. python3 manage.py startapp example
    6. Fill all files as in above link's example (except for vercel_django_example/vercel_app/settings.py)
    7. python3 manage.py runserver
    8. add vercel.json file (fill it)
    9. (vercel_django_example/vercel_app/settings.py)  ALLOWED_HOSTS = ['127.0.0.1','localhost','.vercel.app']
    10. add requirements.txt file (fill it)
    10. python3 manage.py migrate
    11. git add .
    12. git commit -m "Changes"
    13. git push origin master
    14. (Error: https://stackoverflow.com/questions/71869605/error-unable-to-find-binary-python3-8-for-runtime-python3-8-on-vercel)
        Workaround: 
          . A work around is to change the builder from @ardnt/vercel-python-wsgi to @vercel/python (in vercel.json)
    15. vercel
    16. vercel --prod

    17. In case of "Application crashed" error:
      (Check logs) https://vercel.com/sreegithub19/vercel-django-example/C3yDuT4LSwyDaT9gG4iuVekHDNae/functions
      Solution: https://stackoverflow.com/questions/73706065/missing-variable-handler-or-app-in-file-project-wsgi-py
    18. pip3 install python-decouple  (secret key-related)
    

2. To change the Python version (in Mac):
https://londonappdeveloper.com/installing-python-on-macos-using-pyenv/
  . pyenv install 3.8.0
  . echo 3.8.0 > ~/.pyenv/version
  . (Check) python3 --version
  . (To view all version) pyenv install --list


3. https://stackoverflow.com/questions/64208678/hiding-secret-key-in-django-project-on-github-after-uploading-project





Note:
You can install Python packages with
  pip3.8 install <package>
They will install into the site-package directory
  /usr/local/lib/python3.8/site-packages