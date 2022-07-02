# working

import subprocess
list_files_1 = subprocess.run(["goeval",'''\
    fmt.Println("Enter Your First Name: ")
  
    // var then variable name then variable type
    var first string
  
    // Taking input from user
    fmt.Scanln(&first)
    fmt.Println("Enter Second Last Name: ")
    var second string
    fmt.Scanln(&second)
  
    // Print function is used to
    // display output in the same line
    fmt.Print("Your Full Name is: ")
  
    // Addition of two string
    fmt.Print(first + " " + second)
'''],timeout=500)
print()
print("The exit code was: %d" % list_files_1.returncode)