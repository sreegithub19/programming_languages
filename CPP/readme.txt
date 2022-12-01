1. Sample C++ program:

//.  hello.cpp : 
// Simple C++ program to display "Hello World"

// Header file for input output functions
#include<iostream>

using namespace std;

// main function -
// where the execution of program begins
int main()
{
 // prints hello world
 cout<<"Hello World"<<endl;
 
 return 0;
}



// Execution: 
(i) g++ hello.cpp -o hello.out 
(ii) ./hello.out

----------------------------------------------------------------

2. BASIC embeddings (Python, Node.js) in C++ ::

// https://www.geeksforgeeks.org/system-call-in-c/

// A C++ program that compiles and runs another C++
// program
//#include <bits/stdc++.h>
#include<string>
#include<iostream>
using namespace std;
int main ()
{

    // Build command to execute. For example if the input
    // file name is a.cpp, then str holds "gcc -o a.out a.cpp"
    // Here -o is used to specify executable file name
    string str = "python3 ";
    str = str + "-c " + "\"import flask;print('hi');print(2+3)\
    \"";

    // Convert string to const char * as system requires
    // parameter of type const char *
    const char *command = str.c_str();

    cout << "Compiling file using " << command << endl;
    system(command);
/**************************************************************/
    string str1 = "node ";
    str1 = str1 + "-e " + "\"console.log(2+3);\
    \"";

    // Convert string to const char * as system requires
    // parameter of type const char *
    const char *command1 = str1.c_str();

    cout << "Compiling file using " << command1 << endl;
    system(command1);
/**************************************************************/
    return 0;
}

------------------------

Little advanced embeddings not working with Python or Node.js in C++:

(Not working) :
// https://www.geeksforgeeks.org/system-call-in-c/

// A C++ program that compiles and runs another C++
// program
//#include <bits/stdc++.h>
#include<string>
#include<iostream>
using namespace std;
int main ()
{

    // Build command to execute. For example if the input
    // file name is a.cpp, then str holds "gcc -o a.out a.cpp"
    // Here -o is used to specify executable file name
    string str = "python3 ";
    str = str + "-c " + "\"from flask import Flask;\
    app = Flask('app');\
    # http://192.168.0.94:8080/\
    @app.route('/')\
    def run_code_1():\
        return '''<!DOCTYPE html><html><head><title>Page Title</title><h1>Hello H1</h1></head></html>''';\
    app.run(host='0.0.0.0', port=8080);\
    \"";

    // Convert string to const char * as system requires
    // parameter of type const char *
    const char *command = str.c_str();

    cout << "Compiling file using " << command << endl;
    system(command);
/**************************************************************
    string str1 = "node ";
    str1 = str1 + "-e " + "\"\
    var pb = require('python-bridge');\
    console.log(2+3);console.log(2+3)\
    \
    \"";

    // Convert string to const char * as system requires
    // parameter of type const char *
    const char *command1 = str1.c_str();

    cout << "Compiling file using " << command1 << endl;
    system(command1);
**************************************************************/
    return 0;
}

------------------------

2. BASIC embeddings (Python, Node.js) in C++ :: (continued):
 
// https://www.geeksforgeeks.org/system-call-in-c/ 
 
// A C++ program that compiles and runs another C++ 
// program 
//#include <bits/stdc++.h> 
#include<string> 
#include<iostream> 
using namespace std; 
int main () 
{ 
 
    // Build command to execute. For example if the input 
    // file name is a.cpp, then str holds "gcc -o a.out a.cpp" 
    // Here -o is used to specify executable file name 
    string str = "python "; 
    str = str + "-c " + "\"import flask;print('hi');print(2+4);\ 
    \""; 
 
    // Convert string to const char * as system requires 
    // parameter of type const char * 
    const char *command = str.c_str(); 
 
    //cout << "Compiling file using " << command << endl; 
    system(command); 
/**************************************************************/ 
    // string str1 = R"( 
    //     node -e "console.log(2+3+` from nodejs`);" 
    // )"; 
    string str1 = "node -e " 
    "\"\ 
    console.log(2+3+` from nodejs`);\ 
    \""; 
 
    // Convert string to const char * as system requires 
    // parameter of type const char * 
    const char *command1 = str1.c_str(); 
 
    //cout << "Compiling file using " << command1 << endl; 
    system(command1); 
    string s = "Hi"; 
     
    cout<<s<<endl; 
/**************************************************************/ 
    return 0; 
}


----------------------------------------------------------------
