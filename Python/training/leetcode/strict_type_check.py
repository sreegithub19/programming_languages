from importlib import *


class Solution:
    def discountPrices(self, result: str) -> str:
        return "Cool" if type(result) == getattr(self, import_module('inspect').currentframe().f_code.co_name).__annotations__.get('return') else exec('''
#import traceback
traceback.print_exc()
raise TypeError()
''')

print(Solution().discountPrices("2"))


exec('''
print("333")
''')






