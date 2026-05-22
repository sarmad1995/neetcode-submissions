class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     * 
     * Input: nums = [3,3,2,2,3], val = 3

       Output: k = 2, nums = [2,2,_,_]
     */
    removeElement(nums, val) {
        let insertionIndex = 0;

        for(let i =0; i<nums.length; i++) {
            if(nums[i] !== val) {
                nums[insertionIndex] = nums[i]
            }
        }
        return insertionIndex
    }
}
