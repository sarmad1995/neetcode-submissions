class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = {};

        for(const char of strs) {
            const sorted = [...char].sort();
            if(map[sorted]) {
                map[sorted].push(char)
            } else {
                map[sorted] = [char]
            }
        }
        return Object.values(map)
    }
}
