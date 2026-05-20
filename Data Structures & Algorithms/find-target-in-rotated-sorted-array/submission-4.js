class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * target = 6;
     * 
     * 
     * 
     * [3,1]
     */
    search(nums, target) {



        let left = 0; // 0
        let right = nums.length -1;// 1

        while(left <= right) {
            const mid = Math.trunc((right + left ) / 2); // 0
            console.log({ mid })
            if(nums[mid] === target) {
             return mid;
            }
           if(nums[mid] >= nums[left]) {
            if(target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            // right
           } else {
            if(target > nums[mid] && target <= nums[right]) {
                left = mid +1;
            } else {
                right = mid -1;
            }
           }
        }
        return -1;
    }
}
