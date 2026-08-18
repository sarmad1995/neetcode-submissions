class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const base = strs[0]
        let result = base.length;

        for(const word of strs) {
            let curr = 0;
            for(let i = 0; i<word.length; i++) {
                const ch = word[i];
                if(base[i] !== ch) {
                    break;
                }
                curr++;
            }
            result = Math.min(result, curr)
        }

        return base.slice(0, result)
    }
}
