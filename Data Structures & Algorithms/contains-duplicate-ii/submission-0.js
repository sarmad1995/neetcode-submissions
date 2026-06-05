class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let map = new Map();
        let l = 0;
        for(let r = 0; r<nums.length; r++) {
            if(r - l > k) {
                map.delete(nums[l])
                l++;
            }
            if(map.has(nums[r])) {
                return true;
            }
            map.set(nums[r], true)
        }
        return false;
    }
}
