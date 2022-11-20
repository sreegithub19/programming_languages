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
import os
import seaborn as sns
df  = pd.read_csv("datasets/dm_office_sales.csv")

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])   
#install("tabulate")

def tabulate_():
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

#tabulate_()

def flask_app():
    app = Flask(__name__)

    @app.route('/')
    def scrape_and_reformat():
        print(pd.DataFrame(data))
        return (pd.DataFrame(data).to_string() + pd.DataFrame(data).to_html() + pd.DataFrame(data).to_html())

    @app.route('/next')
    def next():
        #return (pd.DataFrame(data))    # error - TypeError: The view function did not return a valid response. The return type must be a string, dict, list, tuple with headers or status, Response instance, or WSGI callable, but it was a DataFrame.
        return (pd.DataFrame(data).to_string())

    if __name__ == '__main__':
        webbrowser.open('http://127.0.0.1:5000') 
        webbrowser.open('http://127.0.0.1:5000/next') 
        app.run(debug=True)
#flask_app()



#child process outputs are coming in the Anaconda terminal
def child_process_():
    import subprocess
    import sys
    list_files_1 = subprocess.run(["python3","-c",'''
    print(input("enter a number:"))
    ''']);
    print("The exit code was: %d" % list_files_1.returncode);
    print(list_files_1.stdout);
    print(list_files_1.stderr);
#child_process_()

def display_():
    display(
        pd.array([
                np.abs([-2,-2,-----+-2]),
                np.absolute([-2,-2,-----+-2]),
                np.add([2,3],[2,3]),
                #np.alen([[1,2,3],[3,2]]),  # 2
                np.all([1,-2,0]), #Test whether all array elements along a given axis evaluate to True.
                np.any([0,0,0]),
                np.alltrue([1,1,-1]),
                np.zeros([5]),
                np.zeros(10)+5,
                np.zeros([2,3,4]),
                np.zeros([2,2,3,4]),
                np.zeros([2,2,2,3,4]),
                display(
                    np.ones(5),
                    np.linspace(0,2,5,210000000),  # 21 elements in range of [0,21]
                    np.random.rand(2,2,3,3000),
                    np.random.rand(5,2),
                    np.random.randint(0,22,(2,4,2)),
                    np.random.seed(42), #Hitchhiker's Guide to the Galaxy
                    np.random.rand(4)
                ),
                subprocess.run(["python3","-c",'''
print("Inside subprocess")
import subprocess
import sys
from pprint import pprint as pr
from IPython.display import display,HTML

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])   
install("numpy")
install("pandas")


import numpy as np
arr = np.arange(0,11)
arr_ = arr[:]
arr_[-1] = 1000
arr_copy = arr.copy()[:]
arr_copy[-1] = 100
display(
    pr(arr),
    pr(arr[0:5]),
    pr(arr[0:-5]),
    pr(arr[-5:0]),
    pr(arr[:]),
    pr(arr_[:]),  # changes the original array
    pr(arr_copy[:]),  # does not change the original array
    pr(arr>4),
    (arr[arr>4]),
)
    ''']).stdout,
        ])
    )
#display_()

def subs():
    subprocess.run(["python3","-c",'''
    print("Inside matplotlib subprocess")
    import matplotlib.pyplot as plt
    import numpy as np

    t = np.arange(0.0, 2.0, 0.01)
    s = 1 + np.sin(2*np.pi*t)
    plt.plot(t, s)

    plt.xlabel('time (s)')
    plt.ylabel('voltage (mV)')
    plt.title('About as simple as it gets, folks')
    plt.grid(True)
    plt.savefig("test.png")
    plt.show()
    ''']).stdout
#subs()

def seaborn_():
    plt.figure(figsize=(12,4),dpi=200)
    display(
        sns.scatterplot(x='salary',y='sales',data=df,hue='sales'),
        plt.show(),
        sns.scatterplot(
            x='salary',y='sales',data=df,hue='salary',
            size='work experience',
            alpha=0.2,  # for transparency/ opacity
        ),
        plt.show(),
        sns.scatterplot(
            x='salary',
            y='sales',
            data=df,
            hue='level of education',
            palette='Dark2',
            style='level of education', # different shapes
        ),
        plt.show(),
    )

seaborn_()