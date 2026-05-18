class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        
        for(const char of strs) {
            const freq = new Array(26).fill(0);
            for(const c of char) {
                const code = c.charCodeAt(0) - 97;
                freq[code] = (freq[code] || 0) + 1;
            }
            const current = map[freq.join(",")]
            if(current) {
              map[freq.join(",")].push(char);
            } else {
              map[freq.join(",")] = [char]
            }
                
        }
        return Object.values(map)
    }
}
