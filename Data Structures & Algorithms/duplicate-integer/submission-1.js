class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};

        for (let num of nums) {
            if (map[num] === true) {
                return true;
            }
            map[num] = true;
        }
        return false;
    }
}
