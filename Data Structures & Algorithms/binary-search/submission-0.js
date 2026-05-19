class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * 
     * 
     * target 4, expected 3
     * [-1,0,2,4,6,8]
     * 2
     * 
     */
    search(nums, target) {

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            console.log(mid)
            if(target === nums[mid]) {
                return mid;
            } else if (target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
