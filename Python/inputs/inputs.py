import subprocess
import sys
list_files_1 = subprocess.run(["python","-c",'''
print(input("Enter a number:"))
''']);
print("The exit code was: %d" % list_files_1.returncode);
print(list_files_1.stdout);
print(list_files_1.stderr);


list_files_1 = subprocess.run(["python3","-c",'''
import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])   
install("numpy")
'''],check=True, capture_output=True)
print(list_files_1.stdout)
print(list_files_1.stderr)