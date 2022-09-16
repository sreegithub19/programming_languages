flask_heroku:

(i) git clone https://github.com/sreegithub19/flask_heroku.git
(ii) In "flask_heroku" folder: 
    1. pip3 install pipenv
    2. pipenv install flask gunicorn 
    3. touch Procfile (fill it)
    4. touch runtime.txt (fill it)
    5. mkdir app
    6. cd app
    7. touch main.py (fill it)
    8. cd ../
    9. touch wsgi.py (fill it)
    10. pipenv shell 
    11. git add .
    12. git commit -m "Initial Commit"
    13. git push origin master  (or whichever branch)

    14. flask run (to run flask app in local)


flask_vercel:
    1. git clone https://github.com/sreegithub19/flask_vercel.git
    2. cd flask_vercel
    3. python3 -m venv venv
    4. . venv/bin/activate
    5. cd venv
    6. touch index.py (fill it)
    7. export FLASK_APP=index.py   
    8. export FLASK_ENV=development
    9. flask run
    10. touch vercel.json (fill it)
    11. touch requirements.txt (fill it)
    12. pip3 install -r requirements.txt

    Deploying to Vercel:
    13. vercel
    14. vercel --prod


vercel_flask_app:
    (i) To run the app: python3 index.py



