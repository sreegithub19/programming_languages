# https://stackoverflow.com/questions/42521230/how-to-escape-curly-brackets-in-f-strings

from flask import Flask, render_template
import matplotlib.pyplot as plt
from numpy import random
# plt.switch_backend('agg')
import seaborn as sns
import sys
import logging

app=Flask('app')

app.debug = True  #  to activate debug mode 

# static routing
@app.route('/')
def home_page():
    a = "455"
    return f"""
    <!DOCTYPE html>
    <html
    <head>
    <style>
    h1 {{color: blue;}}
    h2 {{color: #ff0000;}}
    h3 {{color: yellow}}
    p {{border: 2px solid powderblue}}
    body {{color:#000; font-family:times; margin: 4px; }}
    pre {{font : 10px monaco; color : black; background-color : #fafafa; }}
    </style>
    </head>
    <body>
    <h1>Welcome!</h1>
    <h2>This is an H2 header</h2>
    <h3>This is an H3 header</h3>
    <script>
    document.write('This is script!<br>');
    document.write(2+3/1);alert(2+3);
    console.log({a})
    </script>
    <p>This is some sample text</p>
    <p style='border: 2px solid powderblue;'>
    <a href='http://devdaily.com/blog/'>devdaily blog (link)</a></p>
    <p style='border: 2px solid powderblue;'>
    <a href='/about/<username>'>About page</a></p>
    <a href='/home_page_2'>Home page - 2</a></p>
    </body>
    """


#dynamic routing
@app.route('/about/<username>')
def about_page(username):
    return f"""
    <h1> This is the about page of {username}</h1>
    """

# render template
@app.route('/home_page_2')
@app.route('/home_page_next')
def home_page_2():
    return render_template('home.html')

#dynamic routing
@app.route('/seaborn')
def seaborn():
    sns.distplot([0, 1, 2, 3, 4, 5])
    plt.show()
    sns.distplot([0, 1, 2, 3, 4, 5], hist=False)
    plt.show()
    x = random.normal(size=(2, 3))
    return f'''
    <script>
    console.log(`{x,type(x)}`)
    </script>
    '''
#dynamic routing
@app.route('/leetcode')
def leetcode():
    code = '''
    import numpy as np
    def func(a):
        print(a)
    func(23)
    '''
    return f'''
    <code>
    <pre>
    {code}
    </pre>
    </code>
    '''




app.run(host='0.0.0.0', port=8080)
