import subprocess
list_files_1 = subprocess.run(["mypy","-c",'''
def multiply(num_1:int, num_2:str) -> str:
    return num_1 * num_2


print(multiply(3, 10))
#print(multiply("a", "b")
'''],timeout=500)
print()
print("The exit code was: %d" % list_files_1.returncode)