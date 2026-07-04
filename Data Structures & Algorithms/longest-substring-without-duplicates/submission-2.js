class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let l = 0;
        let max = 0;
        const charMap = {}

        for(let r = 0; r<s.length; r++) {
            if(charMap[s[r]] !== undefined) {
                l = charMap[s[r]] + 1;
            }
            charMap[s[r]] = r;
            max = Math.max(max, r - l + 1)
        }
        return max;
    }
}
