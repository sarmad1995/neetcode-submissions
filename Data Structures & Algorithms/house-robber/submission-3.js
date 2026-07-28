class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) {
            return nums[0]
        }
        if(nums.length === 2) {
            return Math.max(Number(nums[0]), Number(nums[1]))
        }
        const dp = [nums[0], nums[1]]
        
        for(let i = 2; i< nums.length; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        }
        return dp[dp.length - 1]
    }
}
