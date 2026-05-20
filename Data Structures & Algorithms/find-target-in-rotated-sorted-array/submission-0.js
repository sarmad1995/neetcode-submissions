class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * target = 4;
     * [9,8,7,6,1,2,4,5];
     */
    search(nums, target) {



        let left = 0;
        let right = nums.length -1;

        while(left <= right) {
            const l = nums[left];
            const r = nums[right];
            const mid = Math.trunc((right + left) /2); 
            const num = nums[mid];
            console.log('mid', mid); // 2
            console.log('num', num) // 5
            if(num === target) {
                return mid;
            } else if (num > r) {
                // rotated array
                if(target <= r && target > num ) {
                    left = mid + 1;
                } else {
                    left = mid + 1;                }
            } else {
                // sorted array
                right = mid -1;
            }   
        }
        return -1;
    }
}
