import subprocess
import sys
list_files_1 = subprocess.run(["python","-c",'''
print(input("Enter a number:"))
''']);
print("The exit code was: %d" % list_files_1.returncode);
print(list_files_1.stdout);
print(list_files_1.stderr);