class Solution {
    /**
     * @param {string} s
     * @return {number}
     *
     * zxyzxyz
     *
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()

        let left = 0;
        let max = 0;
        for (let r = 0; r < s.length; r++) {
            while(map.has(s[r])) {
               map.delete(s[left])
               left++;
            }
            max = Math.max(max, r - left + 1);
            map.set(s[r]);
        }
        return max;
    }
}
