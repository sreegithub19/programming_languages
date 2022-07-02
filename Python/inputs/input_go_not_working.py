# not working

import subprocess
inp = str(input())
list_files_1 = subprocess.run(["goeval",'''\
	fmt.Println("input text:")
	line := {}
	fmt.Printf("%T\\n", os.Stdin)
	fmt.Printf("%T\\n", line)
	fmt.Println(line)
'''.format(inp)],timeout=500)
print()
print("The exit code was: %d" % list_files_1.returncode)

'''
Error:

# command-line-arguments
:2: assignment mismatch: 2 variables but 1 value
:2: undefined: dfbgrntntr

The exit code was: 2
'''