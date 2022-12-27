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
    Time complexity: O(n**m)
Memoized:
    m = target sum, n = array length
    Space complexity: O(m)
    Time complexity: O(n*m)
'''
def can_sum(target, numbers,memo):
    if(target in memo):
        return memo[target]
    if(target==0):
        return True
    if(target <0):return False
    
    for num in numbers:
        remainder = target - num
        #print(remainder)
        if(can_sum(remainder,numbers,memo)==True):
            memo[target] = True
            return True
    memo[target] = False
    return False
memo = dict()
print(can_sum(7,[2,3],memo))    #True
memo = dict()
print(can_sum(7,[5,3,4,7],memo))  #True
memo = dict()
print(can_sum(7,[2,4],memo))    #False
memo = dict()
print(can_sum(7,[3,4],memo))    #True
memo = dict()
print(can_sum(300,[7,14],memo))  #false
memo = dict()
print(can_sum(8,[2,3,5],memo))  #true
memo = dict()
print("7700:",end="")
print(can_sum(7700,[2,3,5],memo))  #true (max limit in windows)
memo = dict()
print(can_sum(99999,[7,14],memo))  #false
memo = dict()
print(can_sum(99999,[8,14],memo))  #false
memo = dict()
print(can_sum(100000,[8,14,1],memo))  #True   (max limit in mac)


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