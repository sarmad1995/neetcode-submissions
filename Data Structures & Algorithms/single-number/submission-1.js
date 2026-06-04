class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let xor = 0;

        for(const n of nums) {
            xor = xor ^ n
        }
        return n;
    }
}
