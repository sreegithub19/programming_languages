from importlib import *


class Solution:
    def discountPrices(self, result: str) -> str:
        return "Cool" if type(result) == getattr(self, import_module('inspect').currentframe().f_code.co_name).__annotations__.get('return') else (
(__import__("numpy").array([1, 2, 3, 4, 5])),
exec('''
print(43433)
'''),
exec(f'''
raise TypeError("Expected {getattr(self, import_module('inspect').currentframe().f_code.co_name).__annotations__.get('return')} but got {type(result)}")
''')
)
    def discountPrices1(self, result: str) -> str:
        if(type(result) != getattr(self, import_module('inspect').currentframe().f_code.co_name).__annotations__.get('result')):
            raise TypeError()
        else:
            return "result:"+result
    
    def os_(self, result: str) -> str:
        return __import__('os').getcwd()

#print(Solution().discountPrices(2))
print(Solution().discountPrices1(2))
#print(Solution().os_(""))






