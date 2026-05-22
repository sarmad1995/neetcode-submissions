class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let insertionIndex = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[insertionIndex] = nums[i];
                insertionIndex++;
            }
        }
        return insertionIndex;
    }
}
