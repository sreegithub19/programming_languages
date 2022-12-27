# grid traveller
# Memoization

import sys
print(sys.getrecursionlimit())
sys.setrecursionlimit(50000)
print(sys.getrecursionlimit())

d = dict()

def grid_traveller(m,n):
    
    if(m==0 or n==0): 
        d[(m,n)] = 0
        return 0
    if(m==1 and n==1): 
        d[(m,n)] = 1
        return 1
    
    else: 
        sum = 0
        if((m-1,n) not in d.keys()):
            d[(m-1,n)] = grid_traveller(m-1,n)
            sum += (d[(m-1,n)])
        else: 
            sum += (d[(m-1,n)])

        if((m,n-1) not in d.keys()):
            d[(m,n-1)] = grid_traveller(m,n-1)
            sum += (d[(m,n-1)])
        else: 
            sum += (d[(m,n-1)])        

        return sum

print(grid_traveller(1,2))
print(grid_traveller(3,5))
print(grid_traveller(2,10))
print((grid_traveller(1950,1950)))   # working (max limit in Windows)
