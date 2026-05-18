class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    /**
     * 
     * [1,2,4,6]
     * [1, 2, 8, 48];
     * [48,48,24,6]
     */
    productExceptSelf(nums) {

        const prefixProduct = [];
        const postfixProduct = [];
        const result = []
        for(let i = 0; i<nums.length; i++) {
            prefixProduct[i] = nums[i] * (prefixProduct[i - 1] ?? 1)
        }

        for(let i = nums.length - 1; i >= 0; i--) {
            postfixProduct[i] = nums[i] * (postfixProduct[i + 1] ?? 1)
        }

        for(let i = 0; i<nums.length; i++) {
            const num = nums[i];
            const left = (prefixProduct[i - 1] ?? 1);
            const right = (postfixProduct[i + 1] ?? 1);
            result.push(left * right);
        }
        return result;

    }
}
