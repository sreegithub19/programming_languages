============================================================================

1. Nodejs embedded in Java:

// https://issueexplorer.com/issue/eclipsesource/J2V8/527           ->
// https://github.com/caoccao/Javet                                 ->
// https://www.caoccao.com/Javet/

package com.javet;

import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;

public class javet {
    public static void main(String[] args) {
            try(V8Runtime v8Runtime = V8Host.getNodeInstance().createV8Runtime()) {
                System.out.println(v8Runtime.getExecutor("" +




                        "var http = require('http');const process = require('process');\n" +
                        "  \n" +
                        "// Printing process.versions property value\n" +
                        "console.log(process.versions);"
                        + ""
                        + "var server = http.createServer(function (request, response) {\n"
                        + " response.writeHead(200, {'Content-Type': 'text/plain'});\n" +
                        "response.end('Hello World!\\n');"
                        + "});\n"
                        + ""
                        + "server.listen(8000);\n" +
                        "console.log(2+3);"
                        + "console.log('Server running at http://127.0.0.1:8000/');"+








                        "// https://stackoverflow.com/questions/8101137/how-can-i-invoke-ruby-from-node-js\n" +
                        "// https://www.npmjs.com/package/child_process\n" +
                        "\n" +
                        "var exec = require(\"child_process\").exec;\n" +
                        "\n" +
                        "if(exec(`ruby -e '\n" +
                        "\n" +
                        "# to install: gem install wwl-websocket-rails\n" +
                        "# to run: ruby server.rb\n" +
                        "# to check output: http://127.0.0.1:5678/\n" +
                        "\n" +
                        "require \"socket\"\n" +
                        "server = TCPServer.new 5678\n" +
                        "\n" +
                        "while session = server.accept\n" +
                        "  request = session.gets\n" +
                        "  puts request\n" +
                        "\n" +
                        "  session.print \"HTTP/1.1 200\\r\\n\" # 1\n" +
                        "  session.print \"Content-Type: text/html\\r\\n\" # 2\n" +
                        "  session.print \"\\r\\n\" # 3\n" +
                        "  session.print \"Hello world! The time is #{Time.now}\" #4\n" +
                        "\n" +
                        "  session.close\n" +
                        "end\n" +
                        "\n" +
                        "''' Notes:\n" +
                        "1. To install any Ruby package: https://rubygems.org/ . (similar to pypi for Python and npm for Nodejs).\n" +
                        "2. To run ruby file: ruby <filename>   # (<filename> : server.rb).\n" +
                        "'''\n" +
                        "\n" +
                        "'`, function (err, stdout, stderr) {\n" +
                        "    console.log(stdout); \n" +
                        "})) console.log(\"Running at: http://127.0.0.1:5678/\");\n" +
                        "else console.log(\"Failed.\");\n"+







                                "// https://www.steadylearner.com/blog/read/How-to-use-Python-in-JavaScript\n" +
                                "\n" +
                                "let assert = require('assert');\n" +
                                "let pythonBridge = require('python-bridge');\n" +
                                "let python1 = pythonBridge();\n" +
                              //  "const http = require('http');\n" +
                                "const open = require('open');\n" +
                                "const concurrently = require('concurrently');\n" +
                                "/*\n" +
                                "// Create an instance of the http server to handle HTTP requests\n" +
"let app = http.createServer((req, res) => {\n" +
                                "    // Set a response type of plain text for the response\n" +
                                "    res.writeHead(200, {'Content-Type': 'text/html'});\n" +
                                "    // Send back a response and end the connection\n" +
                                "    res.end(`<!DOCTYPE html>\n" +
                                "    <html><body><script>\n" +
                                "    var numb  = prompt(\"Enter a number:\");\n" +
                                "    document.write(numb+4);\n" +
                                "    </script></body></html>`);\n" +
                                "});\n" +
                                "open('http://localhost:3000/');\n" +
                                "// Start the server on port 3000\n" +
                                "app.listen(3000, '127.0.0.1');\n" +
                                "console.log('Node server running on port 3000');\n" +
                                "*/\n" +
                                "\n" +
                                "var numb = 0;\n" +
                                "const readline = require('readline').createInterface({\n" +
                                "    input: process.stdin,\n" +
                                "    output: process.stdout\n" +
                                "  });\n" +
                                "   \n" +
                                "  readline.question('Who are you?', numb => {\n" +
                                "    console.log(`Enter a number:${numb}`);\n" +
                                "    python1.ex`print(\"Number+4 is:\",int(${numb})+4)`\n" +
                                "    python1.end();\n" +
                                "    readline.close();\n" +
                                "  });\n" +
                                "\n" +
                                "let python = pythonBridge();\n" +

                                "python.ex" +
                        "`import math;import cv2;import seaborn;import torch;import sys;\n" +
                                "import tkinter; import tensorflow; import sklearn;import requests;\n" +
                                "import itertools; import logging; import nltk; import sqlalchemy;\n" +
                                "import pygame; import time;\n" +
                                "from sympy import * \n" +
                                "# calling isprime function on different numbers\n" +
                                "print(isprime(30))\n" +
                                "print(isprime(13))\n" +
                                "print(isprime(2))\n" +
                                "\n" +
                                "import turtle \n" +
                                "# Creating turtle screen  \n" +
                                "t = turtle.Turtle()  \n" +
                                "# To stop the screen to display  \n" +
                                "  \n" +
                                "t.forward(100)  \n" +
                                "turtle.mainloop()" +
                        "`;\n" +

                                "\n" +
                                "python.ex`print(math.sqrt(9))`;\n" +
                                "\n" +
                                "let list = [3, 4, 2, 1];\n" +
                                "python.ex`print(sorted(${list}))`\n" +
                                "python.ex" +
                        "`\n" +
                                "import pandas;import flask\n" +
                                "print(\"The input value is:\")" +
                        "`\n" +
                                "/*\n" +
                                "python.ex`\n" +
                           //     "#Three lines to make our compiler able to draw:\n" +
                                "import sys\n" +
                                "import tkinter\n" +
                                "import matplotlib\n" +
"matplotlib.use('TkAgg')\n" +
                                "\n" +
                                "import matplotlib.pyplot as plt\n" +
                                "import numpy as np\n" +
                                "\n" +
                                "xpoints = np.array([1, 8])\n" +
                                "ypoints = np.array([3, 10])\n" +
                                "\n" +
                                "plt.plot(xpoints, ypoints)\n" +
                                "plt.show()\n" +
                                "\n" +
                                "#Two  lines to make our compiler able to draw:\n" +
                                "plt.savefig(sys.stdout.buffer)\n" +
                                "sys.stdout.flush()\n" +
                                "`\n" +
                                "*/\n" +
                                "python.end()"+

                        "").executeString());
            }
            catch(com.caoccao.javet.exceptions.JavetException e){
                System.out.println(e);
            }

/**********************************************************************************************************/

/**********************************************************************************************************/

/**********************************************************************************************************/

// V8 Mode
        /*
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {
            System.out.println(v8Runtime.getExecutor("'Hello Javet'").executeString());
        }
        catch(com.caoccao.javet.exceptions.JavetException e){
                System.out.println("Something went wrong.");
            }
         */
    }
}


============================================================================
2. 

(i) Normal nodejs embeddings: Working;

(ii) Ruby embedding: Working;

(iii) Python embedding (python-bridge): Not working.
Error :
IOError: [Errno 32] Broken pipe
close failed in file object destructor:
IOError: [Errno 9] Bad file descriptor

Process finished with exit code 130 (interrupted by signal 2: SIGINT)

============================================================================

3. 

Embeddings in Java as child processes (Node.js and Python)
(only basic skeleton codes working, not for more advanced codes) ::

// Not working::

package com.java_to_node;

// Java code illustrating
// getInputStream() method
import java.lang.*;
import java.io.*;
class ProcessDemo
{
    public static void main(String arg[]) throws IOException, Exception
    {
        // creating the process
        Runtime r = Runtime.getRuntime();

        // shell script for loop from 1 to 3
        String[] nargs = {"node", "-e", "" +
                "let pb = require('python-bridge');" +
                "" +
                "" +
                "" +
                "let python1 = pb();" +
                "python1.ex`" +
                "print('hi');" +
                "print('hi2');" +
                "from flask import Flask;" +
                "app=Flask('app');" +
                "@app.route('/');" +
                "def run_code_1():return '<!DOCTYPE html><html><h1>Hello World!!</h1></html>';" +
                "app.run(host='0.0.0.0', port=8080);`;" +
                "//python1.end();" +
                "" +
                "" +
                "" +
                "console.log(`hi`);" +
                ""};
        Process p = r.exec(nargs);

        BufferedReader is =
                new BufferedReader(new InputStreamReader(p.getInputStream()));
        String line;

        // reading the output
        while ((line = is.readLine()) != null)

            System.out.println(line);
 }
}

============================================================================

4. 

Python embedded in Java (works for almost everything except for Django) ::

package com.java_to_node;
// working


// use Java 15 for this project

// Java code illustrating
// getInputStream() method
import java.lang.*;
import java.io.*;
class python_shell
{
    public static void main(String arg[]) throws IOException, Exception
    {

        // creating the process
        Runtime r = Runtime.getRuntime();

        // shell script for loop from 1 to 3
        String[] nargs = {"python3", "-c",
                """
                # Run this program on your local python
                # interpreter, provided you have installed
                # the required libraries.
                # Importing the required packages
                import numpy as np
                import pandas as pd
                from sklearn.metrics import confusion_matrix
                from sklearn.model_selection import train_test_split
                from sklearn.tree import DecisionTreeClassifier
                from sklearn.metrics import accuracy_score
                from sklearn.metrics import classification_report
                # Function importing Dataset
                def importdata():
                 balance_data = pd.read_csv(
                'https://archive.ics.uci.edu/ml/machine-learning-'+
                'databases/balance-scale/balance-scale.data',
                 sep= ',', header = None)
                 # Printing the dataswet shape
                 print ("Dataset Length: ", len(balance_data))
                 print ("Dataset Shape: ", balance_data.shape)
                 # Printing the dataset obseravtions
                 print ("Dataset: ",balance_data.head())
                 return balance_data
                # Function to split the dataset
                def splitdataset(balance_data):
                 # Separating the target variable
                 X = balance_data.values[:, 1:5]
                 Y = balance_data.values[:, 0]
                 # Splitting the dataset into train and test
                 X_train, X_test, y_train, y_test = train_test_split(
                 X, Y, test_size = 0.3, random_state = 100)
                 return X, Y, X_train, X_test, y_train, y_test
                # Function to perform training with giniIndex.
                def train_using_gini(X_train, X_test, y_train):
                 # Creating the classifier object
                 clf_gini = DecisionTreeClassifier(criterion = "gini",
                   random_state = 100,max_depth=3, min_samples_leaf=5)
                 # Performing training
                 clf_gini.fit(X_train, y_train)
                 return clf_gini
                # Function to perform training with entropy.
                def tarin_using_entropy(X_train, X_test, y_train):
                 # Decision tree with entropy
                 clf_entropy = DecisionTreeClassifier(
                   criterion = "entropy", random_state = 100,
                   max_depth = 3, min_samples_leaf = 5)
                 # Performing training
                 clf_entropy.fit(X_train, y_train)
                 return clf_entropy
                # Function to make predictions
                def prediction(X_test, clf_object):
                
                 # Predicton on test with giniIndex
                 y_pred = clf_object.predict(X_test)
                 print("Predicted values:")
                 print(y_pred)
                 return y_pred
                 
                # Function to calculate accuracy
                def cal_accuracy(y_test, y_pred):
                 
                 print("Confusion Matrix: ",
                  confusion_matrix(y_test, y_pred))
                 
                 print ("Accuracy : ",
                 accuracy_score(y_test,y_pred)*100)
                 
                 print("Report : ",
                 classification_report(y_test, y_pred))
                
                # Driver code
                def main():
                 
                 # Building Phase
                 data = importdata()
                 X, Y, X_train, X_test, y_train, y_test = splitdataset(data)
                 clf_gini = train_using_gini(X_train, X_test, y_train)
                 clf_entropy = tarin_using_entropy(X_train, X_test, y_train)
                 
                 # Operational Phase
                 print("Results Using Gini Index:")
                 
                 # Prediction using gini
                 y_pred_gini = prediction(X_test, clf_gini)
                 cal_accuracy(y_test, y_pred_gini)
                 
                 print("Results Using Entropy:")
                 # Prediction using entropy
                 y_pred_entropy = prediction(X_test, clf_entropy)
                 cal_accuracy(y_test, y_pred_entropy)
                 
                 
                # Calling main function
                #if __name__=="__main__":
                main()
                
                """
                /*
                +
                """
                def func():
                   return 2+2
                print(func(2+2))
                """
                */

        };
        Process p = r.exec(nargs);

        BufferedReader is =
                new BufferedReader(new InputStreamReader(p.getInputStream()));
        String line;

        // reading the output
        while ((line = is.readLine()) != null)

            System.out.println(line);
    }

}

============================================================================

5.

 Nodejs embedded in Java (not working) ::

package com.java_to_node;
// working


// use Java 15 for this project

// Java code illustrating
// getInputStream() method
import java.lang.*;
import java.io.*;
class node_shell
{
    public static void main(String arg[]) throws IOException, Exception
    {

        // creating the process
        Runtime r = Runtime.getRuntime();

        // shell script for loop from 1 to 3
        String[] nargs = {"node", "-e",
                """
                var {PythonShell} = require('python-shell');
                var pythonbridge = require('python-bridge');
                """
                /*
                +
                """
                def func():
                   return 2+2
                print(func(2+2))
                """
                */

        };
        Process p = r.exec(nargs);

        BufferedReader is =
                new BufferedReader(new InputStreamReader(p.getInputStream()));
        String line;

        // reading the output
        while ((line = is.readLine()) != null)

            System.out.println(line);
    }

}

============================================================================

6.
 To use Java 11 (allows single line of file execution to run the file; eg: java filename.java) ::

(i) brew install java11
(ii) echo 'export PATH="/usr/local/opt/openjdk@11/bin:$PATH"' >> /Users/sreedhar.k/.bash_profile
(iii) source .bash_profile

Note: 
(To switch back to Java 8, remove (ii) from .bash_profile and::
brew uninstall java11).

============================================================================

7.

// project name: j2v8

 Nodejs embedded in Java (working) ::
//(Configuration -> Java 15;
//Project structure -> Module -> 15)


package com.java.basics;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class intro {
    public static void main(String[] args) {
        String strings1 = "console.log('Hi from strings1');";
        String strings =
"""
var {PythonShell} = require('python-shell');
const open = require('open');
const concurrently = require('concurrently');
let pythonBridge = require('python-bridge');
let python1 = pythonBridge();

if(!PythonShell.runString(`
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
#if name == "__main__":
from django.core.management import execute_from_command_line
execute_from_command_line([sys.argv[0], 'runserver','7000'])  # to change port number
`
))
console.log("Not Working");
else {
 console.log("Working");
 open('http://localhost:7000/');
// open('http://localhost:7000/next');
// open('http://localhost:7000/about');
// open('http://localhost:7000/then');
}
""";
        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("node", "-e", strings);
       // processBuilder.command("node", "-e", strings1);
        try {
            Process process = processBuilder.start();
            StringBuilder output = new StringBuilder();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line + "\n");
            }
            int exitVal = process.waitFor();
            if (exitVal == 0) {
                System.out.println("Success!");
                System.out.println(output);
                System.exit(0);
            } else {
                //abnormal...
                System.out.println(output);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Hello Java!");
        intro_1 intro = new intro_1();
        intro.main();
    }
}
class intro_1 {
    public static void main() {
        System.out.println("Hello Java intro_1!");
    }
}


============================================================================


8. 

Documentation:
---------------------------------------------
General: 
(i) Java: 
https://docs.oracle.com/en/java/
Java SE: https://docs.oracle.com/en/java/javase/18/
Java ME: https://docs.oracle.com/javame/8.3/index.html
Java EE: https://docs.oracle.com/javaee/7/index.html
(ii) Maven: https://maven.apache.org/

---------------------------------------------
ML, AI, NLP, DL, DS:
(i) Weka: https://www.cs.waikato.ac.nz/ml/weka/
(ii) Mahout: https://mahout.apache.org/
(iii) Deeplearning4j: https://deeplearning4j.konduit.ai/
(iv) Spark MLLib: https://spark.apache.org/docs/latest/ml-guide.html
(v) Encog: https://www.heatonresearch.com/encog/
(vi) JSAT: https://github.com/EdwardRaff/JSAT/tree/master
---------------------------------------------
Web:
(i) Spring (with Spring Boot): https://spring.io/
(ii) Vaadin: https://vaadin.com/
(iii) Struts: https://struts.apache.org/
(iv) Grails: https://grails.org/
(v) Spark: https://sparkjava.com/
---------------------------------------------
Big Data:
(i) Spark: https://spark.apache.org/docs/latest/api/java/
(ii) Hadoop: https://www.tutorialspoint.com/hadoop/
---------------------------------------------
Gaming:
(i) LWJGL: https://www.lwjgl.org/
(ii) JMonkeyEngine: https://jmonkeyengine.org/
---------------------------------------------
Database:

(i) (Oracle) JDBC:  https://www.oracle.com/database/technologies/appdev/jdbc.html
(ii) (PostgreSQL): https://jdbc.postgresql.org/
(iii) (MongoDB) : https://www.mongodb.com/docs/drivers/java-drivers/
(iv) (MySQL) :
  mysql.connector:  https://dev.mysql.com/doc/connector-j/8.0/en/
(v) (Cassandra) cassandra-driver: https://cassandra.apache.org/doc/latest/cassandra/getting_started/drivers.html#java
---------------------------------------------
Testing:
(i) Selenium: https://www.selenium.dev/selenium/docs/api/java/overview-summary.html
https://www.selenium.dev/
(ii)JUnit: https://junit.org/junit5/docs/current/user-guide/
(iii) TestNG: https://testng.org/doc/documentation-main.html
(iv) Mockito: https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html
---------------------------------------------
Cloud: 
(i) GCP: https://cloud.google.com/java/docs/reference
(ii) Azure: https://docs.microsoft.com/en-us/azure/developer/java/
(iii) AWS: https://aws.amazon.com/sdk-for-java/
---------------------------------------------

============================================================================
