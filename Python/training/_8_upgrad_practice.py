import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

def intro():
    abc = 1,2,3
    a,b,c = 1,2,3
    L =  [3, 6, 7, 3, 10, 1, 3]
    L.pop(3)
    print(
        abc ,   # (1, 2, 3)
        a ,   # 1
        b ,   # 2
        c ,   # 3
        ((500//7) % 5) ** 3,
        7^2  , # XOR
        ~1  ,# bitwise negation operator
        round(3.789),
        #all(4, 6, 0, 1),  -> error
        L,
        bin(22),
        (list(enumerate(['Rachel', 'Monica', 'Phoebe'], start = -1))),
        "Hello World"[::-1],
        max("You should code in Python"),
        "Mississippi".rfind('s'), # rfind(pattern) returns the index of the first occurrence of the pattern provided, from the back side. Hence, the first appearance of 's' from the rear-end occurs at the index '6'.
        "Mississipi".count("issi"), # 1
    )

    ''''''''''''''''''''''''''''''''''''''''''
    a = 7
    def func(a):
        print('a is', a)
        a = 4
        print('a is now', a)
    func(a)
    print('a is finally', a)

    ''''''''''''''''''''''''''''''''''''''''''

    def addn(*args):
        return(sum(args))
    print(addn(1,2,3,4))
    print(addn(5,6))

    ''''''''''''''''''''''''''''''''''''''''''

    func = (lambda x, y, z: x if x > y & x > z else y if y > z else z)
    print(chr(func(ord('b'), ord('a'), ord('C'))))

    ''''''''''''''''''''''''''''''''''''''''''

    L = [lambda x: x*2, lambda x: x*3, lambda x: x*4]
    for i in L:
        print(i(5))

    ''''''''''''''''''''''''''''''''''''''''''

    L = [1, 2, 3, 4]
    def cube_func(n):
        return n**3
    print(list(map(cube_func, L)))

    ''''''''''''''''''''''''''''''''''''''''''

    L = [2, 24, 39, 12, 9]
    from random import shuffle
    shuffle(L)
    print(L)

    ''''''''''''''''''''''''''''''''''''''''''

    def some_func(a=7, b=6, c=1):
        print('a is', a, 'and b is', b, 'and c is', c)
    
    some_func(4, 7)
    some_func(5, c = 9)
    some_func(b = 200, a = 100)

    ''''''''''''''''''''''''''''''''''''''''''
    L = [13, 16, 2, 19, 22, 24, 10, 49, 28, 82, 18]
    final = []

    for i in range(len(L)):
        if L[i]%9 == 1:
            final.append(L[i])

    print(final)
    ''''''''''''''''''''''''''''''''''''''''''
    l = [0, 8, 16, 10, 36, 44, 93]

    final = [int(x**0.5) for x in l if x**0.5 - int(x**0.5) == 0]
            
    print(final)
    ''''''''''''''''''''''''''''''''''''''''''
    s = 'I love Python'
    s = s.split(" ")
    s = s[-1::-1]
    s = " ".join(s)
            
    print(s)
    ''''''''''''''''''''''''''''''''''''''''''
    L = [1, 2, 3, 4]
    print(L * 2)
    T = (1)
    print(T + 10)
    T = (1, 2, 3)
    print(T * 2)
    t = ((1, 4, 2), (9, 0, 3), (5, 6, 8))
    print(t[2][1])
    ''''''''''''''''''''''''''''''''''''''''''
    d = {1:2, 2:3, 3:4}
    d.pop(2)
    print(d)
    print(set({1,2,2}))
    # print(set([1, 2], [3, 4])) -> error

    ''''''''''''''''''''''''''''''''''''''''''

    a = {1, 2, 3, 4}
    b = {3, 4, 5, 6}
    print(a ^ b)

    ''''''''''''''''''''''''''''''''''''''''''
    keyval = {"Yash Pandya": 68, "Debaditya Basu": 89, "Shivam Gupta": 81, "Varun Goyal": 77, "Niranjan Gyancha": 64}
    print(list(keyval.keys()))
    print(list(keyval.values()))

    ''''''''''''''''''''''''''''''''''''''''''

    p = "City of stars, are you shining just for me? City of stars, you never shined so brightly!"
    s = len([i for i in p.split() if(i[0] in ["a","e","i","o","u","A","E","I","O","U"])])
    print(s)
    ''''''''''''''''''''''''''''''''''''''''''
#intro()

def numpy_():
    a = np.arange(10)
    f = np.vectorize(lambda x: x+1)
    print(
        f(a),
        np.full((2,2), 1) == np.ones((2,2)),
    )

    a = np.array( [7, 10, 2, 4, 13, 16])
    med = np.percentile(a, 50)
    print(med)

#numpy_()

def pandas_():
    S1 = pd.Series([0, 2, 4, 6, 8, 10, 12])
    S2 = pd.Series([0, 3, 6, 9, 12, 15])

    print(S1[S1.isin(S2)].index == S2[S2.isin(S1)].index)

pandas_()
