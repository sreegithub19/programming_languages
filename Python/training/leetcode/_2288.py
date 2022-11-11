class Solution:
    def discountPrices(self, s: str, discount: int) -> str:
        s = list(s.split())
        for i in range(len(s)):
            if(s[i].count("$")==1 and s[i].index("$")==0 and len(s[i])>1):
                if(s[i][1:].isdecimal()):
                    s[i] = s[i].replace(s[i][1:],"{:.2f}".format(float(s[i][1:])*(100-discount)/100))
            else:
                continue
        ans = ""
        for i in range(len(s)-1):
            ans += s[i]+" "
        return ans + s[-1] # to avoid space in the end

print(Solution().discountPrices(input("Enter sentence:"), int(input("Enter discount:"))))
        