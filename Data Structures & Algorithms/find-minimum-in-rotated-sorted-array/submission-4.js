class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * [3,4,5,6,1,2]
     * 
     * 
     * 5, if end < 5 go right
     * 
     * [4,5,0,1,2,3]
     * 
     * 
     */
    findMin(nums) {


        let left = 0;
        let right = nums.length -1;

        let min = Infinity;
        if(nums[0] < nums[nums.length -1]) {
            min = nums[0]
            return min;
        }

        while(left <= right) {
            const mid = Math.floor((right + left )/ 2);
            const current = nums[mid];

            if(current > nums[right]) {
                left = mid +1;
            } else {
                right = mid - 1;
            }
            min = Math.min(min, nums[mid])
            
        }
        return min;
    }
}
