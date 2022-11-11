# not working as expected



from typing import Optional
import ast

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self,x):
        self.val = x
        self.next = None

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        li1=[]; li2=[]
        while l1!=None:
            li1.append(str(l1.val))
            l1 = l1.next
        while l2!=None:
            li2.append(str(l2.val))
            l2 = l2.next
        li = [int(i) for i in list(str(int("".join(li1)[::-1])+ int("".join(li2)[::-1]))[::-1])]
        
        previous = None
        first = None
        for i in li:
            current = ListNode(i)  # 7,0,8
            if(first is None):
                first = current
            print(first)
            if(previous is not None):
                previous.next = current
            previous = current
            print(previous)
        return first

solution = Solution()

l1 = ast.literal_eval(input("Enter a list:"))
l2 = ast.literal_eval(input("Enter another list:"))

# node1 = [ListNode(x = i) for i in li1]
# node2 = [ListNode(x = i) for i in li2]

head1 = ListNode(l1[0])
tail1 = head1
len1 = 0
while len1 < len(l1):
      tail1.next = ListNode(l1[len1])
      tail1 = tail1.next
      len1+=1

print(head1)

head2 = ListNode(l2[0])
tail2 = head2
len2 = 0
while len2 < len(l2):
      tail2.next = ListNode(l2[len2])
      tail2 = tail2.next
      len2+=1

print(head2)

# for i in range(len(node1)-1):
#     node1[i].next_ele = node1[i+1]
# for i in range(len(node2)-1):
#     node2[i].next_ele = node2[i+1]

ll = solution.addTwoNumbers(head1,head2)
print(ll)

l = []
n = ll
while n is not None:
    l.append(n.val)
    n = n.next
print(l)