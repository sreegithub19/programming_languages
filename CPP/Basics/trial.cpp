//2. BASIC embeddings (Python, Node.js) in C++ ::

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