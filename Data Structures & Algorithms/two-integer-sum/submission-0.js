class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        
        for(let [i, num] of nums.entries()) {
            if(map.has(num)) {
                return [map.get(num), i]
            }
            map.set(target - num, i)
        }
        return []

    }
}
