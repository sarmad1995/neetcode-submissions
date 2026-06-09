class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const map1 = {};
        const map2 = {};
        if(s.length != t.length) {
            return false;
        }

        for(let i = 0; i<s.length; i++) {
            if(map1[s[i]] && map1[s[i]] !== t[i]) return false;
            if(map2[t[i]] && map2[t[i]] !== s[i]) return false;

            map1[s[i]] = t[i]
            map1[t[i]] = s[i]
        }
        return true;
    }
}
