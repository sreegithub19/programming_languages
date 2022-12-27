# Input: 
# n = [int(i) for i in input().split()]
# m = n[0]
# n = n[1:]
# print(n[-1])
import sys
print(sys.getrecursionlimit())
sys.setrecursionlimit(35000)
print(sys.getrecursionlimit())
'''
Brute force:
    m = target sum, n = array length
    Space complexity: O(m)
    Time complexity: O(n**m * m)
Memoized:
    m = target sum, n = array length
    Space complexity: O(m**2)
    Time complexity: O(n*m**2)
'''
def how_sum(target, numbers,memo):
    if(target in memo):
        return memo[target]
    if(target==0):
        return []
    if(target <0):return None
    
    for num in numbers:
        remainder = target - num
        #print(remainder)
        result = how_sum(remainder,numbers,memo)    # return type could be array (list) or None
        if(result != None):
            memo[target] = [*result,num]
            return memo[target]

    memo[target] = None
    return None


memo = dict()
print(how_sum(7,[2,3],memo))    
memo = dict()
print(how_sum(7,[5,3,4,7],memo))  
memo = dict()
print(how_sum(7,[2,4],memo))    
memo = dict()
print(how_sum(7,[3,4],memo))    
memo = dict()
print(how_sum(300,[7,14],memo))  
memo = dict()
print(how_sum(8,[2,3,5],memo))  
memo = dict()
print("7700:",end="")
print(how_sum(7700,[2,3,5],memo))  #true (max limit in windows)
memo = dict()
print(how_sum(99999,[7,14],memo))  
memo = dict()
print(how_sum(99999,[8,14],memo))  
memo = dict()
#print(how_sum(100000,[8,14,1],memo))  


'''
1.  7-2=5 
        -> 5-2=3 
                -> 3-2=1 
                        -> 1-2=(-1) (False) 
                        -> 1-3=(-2) (False)
                -> 3-3=0 (True)
        -> True
    -> True
'''