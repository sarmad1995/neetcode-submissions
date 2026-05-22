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
        let index = 0;
        let insertionIndex = 0;

        while (index < nums.length) {
            while (nums[index] === val) {
                index++;
            }
            if(index >= nums.length) {
                break;
            }
            nums[insertionIndex] = nums[index]
            index ++;
            insertionIndex++;
        }
        // console.log(nums, insertionIndex)
        return insertionIndex
    }
}
