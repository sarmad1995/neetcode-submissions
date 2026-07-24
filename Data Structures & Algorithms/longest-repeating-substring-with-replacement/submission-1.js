class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     *
     * k 2
     * XYYXYY
     *
     * {
     * x: 2
     * y: 2,
     *
     * }
     *
     */
    characterReplacement(s, k) {
        const map = {};
        let l = 0;

        const isMapValid = (length) => {
            const max = Object.values(map).reduce((a, v) => Math.max(a, v), 0);
            return length - max <= k;
        };
        let max = 0;
        for (let r = 0; r < s.length; r++) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            if (!isMapValid(r - l + 1)) {
                map[s[l]]--;
                l++;
            }
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}
