import sys
print(sys.getrecursionlimit())
sys.setrecursionlimit(35000)
print(sys.getrecursionlimit())

'''
Memoization:
time: O(n)
space: O(n)
'''
keyval = dict()

def fib(n):
    n = int(n)
    if(n<=2):
        keyval[n] = 1
        return 1

    sum = 0
    if(n-1 not in keyval.keys()):
        keyval[n-1] = fib(n-1)
        sum += keyval[n-1]
    else:
        sum += keyval[n-1]

    if(n-2 not in keyval.keys()):
        keyval[n-2] = fib(n-2)
        sum += keyval[n-2]
    else:
        sum += keyval[n-2]

    return sum

#print(fib(31700))  #max limit in mac
print(fib(3925))    #max limit in windows