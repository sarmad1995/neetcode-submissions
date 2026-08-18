class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const freqS = new Map();
        const freqT = new Map();
        for (const ch of s) {
            freqS.set(ch, (freqS.get(ch) || 0) + 1)
        }
        for (const ch of s) {
            freqT.set(ch, (freqT.get(ch) || 0) + 1)
        }

        for (const [key, value] of freqS.entries()) {
            if (!freqT.has(key) || freqT.get(key) !== value) {
                return false;
            }
        }
        return true;

    }
}
