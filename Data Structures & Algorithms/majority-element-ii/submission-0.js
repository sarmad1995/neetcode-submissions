class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = {};
        const limit = nums.length / 3;
        const result = []
        for(let n of nums) {
            if(map[n] === true) continue;
            map[n] = (map[n] || 0) + 1
            if(map[n] > limit) {
                map[n] = true
                result.push(n)
            }
        }

        return result;

    }
}
