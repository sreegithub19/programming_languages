const { execFile } = require('child_process');
var child = execFile("python", ["-c",`
from distutils.log import debug
import numpy as np
import pandas as pd
from tabulate import tabulate
import webbrowser
from IPython.display import display,HTML
# reference: https://github.com/sreegithub19/upgrad/blob/main/1_Prep%20sessions/1_Python_basics/Prep%20session%20practice%202%20(classes%2C%20OOPS).ipynb
import subprocess
import sys
import matplotlib.pyplot as plt
from flask import Flask


def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])   
install("matplotlib")


product_category = np.array(['Furniture', 'Technology', 'Office Supplies'])
sales = np.array([4110451.90, 4744557.50, 3787492.52] )

plt.bar(product_category, sales,color='green')
plt.show()
plt.show()

cars_per_cap = [809, 731, 588, 18, 200, 70, 45]
country = ['United States', 'Australia', 'Japan', 'India', 'Russia', 'Morocco', 'Egypt']
drives_right = [True, False, False, False, True, True, True]
data = {"cars_per_cap": cars_per_cap, "country": country, "drives_right": drives_right}
display(pd.DataFrame(data))   # == print(pd.DataFrame(data)), in this case

print(tabulate(pd.DataFrame(data),headers='keys', tablefmt='psql'))
#s = (pd.DataFrame(data).to_html())

def flask_app():
    app = Flask(__name__)

    @app.route('/')
    def scrape_and_reformat():
        print(pd.DataFrame(data))
        return (pd.DataFrame(data).to_string() + pd.DataFrame(data).to_html() + pd.DataFrame(data).to_html())

    @app.route('/next')
    def next():
        #return (pd.DataFrame(data))    # error - TypeError: The view function did not return a valid response. The return type must be a string, dict, list, tuple with headers or status, Response instance, or WSGI callable, but it was a DataFrame.
        return (pd.DataFrame(data).to_string() + pd.DataFrame(data).to_string())

    #if __name__ == '__main__':
    webbrowser.open('http://127.0.0.1:5000') 
    webbrowser.open('http://127.0.0.1:5000/next') 
    app.run(debug = True, use_reloader=False)
flask_app()

`
]);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', () =>  process.exit());


