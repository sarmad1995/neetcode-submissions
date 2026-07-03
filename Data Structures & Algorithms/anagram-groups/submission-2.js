class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const freq = {}
      for(const word of strs) {
        const arr = new Array(26).fill(0);

        for(const ch of word) {
          const code = ch.charCodeAt(0) - 97;
          arr[code]++;
        }
        const key = arr.join('');
        if(freq[key] !== undefined) {
          freq[key].push(word)
        } else {
          freq[key] = [word]
        }
      }
      return Object.values(freq)
    }
}
