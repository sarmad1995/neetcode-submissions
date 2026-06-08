class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const backtrack = (curr, idx) => {
            result.push([...curr])
            for(let i = idx; i<nums.length; i++) {
                curr.push(nums[i]);
                backtrack(curr, i + 1)
                curr.pop();
            }
        }
        backtrack([], 0)
        return result;
    }
}
