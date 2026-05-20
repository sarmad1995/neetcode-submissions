class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * 
     * 
     * [3,4,5,6,1,2]
     * 
     * min 5;
     * 5
     * 3, 5
     * 5, 2
     * 
     * 
     * 6,1,2
     * 1,
     * 1,6
     * 1,2
     * 
     * [10,11,12,13,1,2,3,4,5,6,7,8,9]
     * 
     * if 3 -> left is less and right > 3 -> then go left 
     * 
     * 10,11,12,13,1,2
     * 
     * 13,1,2
     *
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */
    findMin(nums) {



        let left = 0;
        let right = nums.length -1 ;
        let min = Infinity;

        while(left<=right) {
            const mid = Math.trunc((right + left ) / 2);
            const num = nums[mid]
            min = Math.min(num, min)
            if(num > nums[mid -1] && nums[right] > num) {
                right = mid -1;
            } else {
                left = mid + 1;
            }
        }
        return min
    }
}
