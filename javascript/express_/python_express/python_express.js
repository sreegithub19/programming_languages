const express = require('express');
const path = require('path');
const app = express();
// http://127.0.0.1:5000/two_sum

app.get('/two_sum', (request, response) => {
 response.send(`
 <style>
div {
  width: 510px;
  height: 300px;
  border: 1px solid black;
  padding: 5px;
  margin: 15px;
  overflow: scroll;
}
 </style>
 <h1>
 1. <a href="https://leetcode.com/problems/two-sum/">Two Sum</a>
 </h1>

 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
<br>

<h3> Ans </h3>

<h4> Python </h4>

<div>
<code>
<xmp>
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res={}
        for i in range(len(nums)):
            if (target-nums[i]) in res:
                return [i,res[target-nums[i]]]
            else:
                res[nums[i]]=i
</xmp>
</code>
</div>

<h4>C++ </h4>

<div>
<code>
<xmp>
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> v1;
        for(int i=0;i<nums.size()-1;i++){
            for(int j=i+1;j<nums.size();j++){
                if(nums[i]+nums[j]==target){
                    //cout<<i<<" "<<j<<endl;
                    v1.push_back(i);
                    v1.push_back(j);
                    break;
                }
            }
        }
        return v1;
    }
};
</xmp>
</code>
</div>
 `)});




app.listen(5000, () => {
  console.log('App is listening on port 5000');
});