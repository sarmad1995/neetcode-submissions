class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     * Input: s = "AAABABB", k = 1
     * 3
     * 1
       Output: 5
     */
    characterReplacement(s, k) {
        let map = {}
        let l = 0;
        let max = 0;

        const isMapValid = (length) => {
            const max = Object.values(map)
            .reduce((acc, curr) => Math.max(acc, curr)
            , 0);
            return length - max <= k
        }

        for(let r = 0; r<s.length; r++) {
            map[s[r]] = (map[s[r]]|| 0) + 1;
            while(!isMapValid(r-l+1)) {
                map[s[l]] = map[s[l]] - 1 
                l++
            }
            max = Math.max(max, r - l + 1)
        }
        return max;
    }
}
