class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let map = new Set();

        let max = 0;
        let l = 0;

        for(let r = 0; r<s.length; r++) {
            while(map.has(s[r])) {
                map.delete(s[l])
                l++
            }
            map.add(s[r])
            max = Math.max(max, r - l + 1)
        }
        return max;
    }
}
