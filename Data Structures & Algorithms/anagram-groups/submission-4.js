class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const word of strs) {
            const arr = new Array(26).fill(0)
            for(const ch of word) {
                const idx = ch.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
                arr[idx]++
            }
            const key = arr.join(',')
            if(map.has(key)) {
                map.get(key).push(word)
            } else {
                map.set(key, [word])
            }
        }
        const result = []
        for(const value of map.values()) {
            result.push(value)
        }
        return result;
    }
}
