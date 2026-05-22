class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * 
     * 4,5,6,7,0,1,2
     */
    search(nums, target) {


        let left = 0;
        let right = nums.length -1;


        while(left <= right) {
            const mid = Math.floor((right + left) / 2);
            const current = nums[mid]

            if(current === target) {
                return mid;
            }
            // handle sorted array
            if(nums[left] <= nums[right]) {
                if(target < current) {
                    right = mid -1;
                } else {
                    left = mid +1;
                }
            } else if(current > nums[right]) {
                // right
                if(target < current && target >= nums[left]) {
                    right = mid - 1;
                }  else {
                    left = mid + 1;
                }
            } else {
                if(target > current && target <= nums[right]) {
                    left = mid +1;
                } else {
                    right = right +1;
                }
            }
        }
        return -1
    }
}
