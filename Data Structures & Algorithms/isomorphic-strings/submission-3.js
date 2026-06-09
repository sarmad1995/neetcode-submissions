class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const mapST = new Map();
        const mapTS = new Map();
        if (s.length != t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            const c1 = map[s[i]];
            const c2 = map[t[i]]
            if (
                (mapST.has(c1) && mapST.get(c1) !== c2) ||
                (mapTS.has(c2) && mapTS.get(c2) !== c1)
            ) {
                return false;
            }

            mapST.set([s[i]], t[i]);
            mapTS.set(map2[t[i]], s[i])
        }
        return true;
    }
}
