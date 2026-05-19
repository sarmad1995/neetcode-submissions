class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {


        const prefixProduct = [];
        for(let i = 0; i<nums.length; i++) {
            prefixProduct[i] = nums[i] * (prefixProduct[i - 1] ?? 1)
        }
        const postfixProduct = [];
        for(let i = nums.length -1; i>= 0; i--) {
            postfixProduct[i] = nums[i] * (postfixProduct[i + 1] ?? 1);
        }

        const result = []
        for(let i = 0; i <nums.length; i ++) {
            const leftValue = prefixProduct[i - 1] ?? 1;
            const rightValue = postfixProduct[i + 1] ?? 1
            result.push(leftValue * rightValue)
        }
        return result;
    }
}
