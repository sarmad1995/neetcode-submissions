class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const freq = {};
        let max = 0
        const n = s.length;
        for(let ch of s) {
            freq[ch] = (freq[ch]|| 0 ) + 1
            max = Math.max(freq[ch], max)
        }
        console.log(max, Math.ceil(n/2))
        if(max > Math.ceil(n/2)) {
            return ''
        }
        
        const arr = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
        const result = []
        let i = 0
        for(let ch of arr) {
            let count = freq[ch];
            while(count > 0) {
                if(i >= n) {
                    i = 1;
                }
                result[i] = ch;
                i = i + 2;
                count--;
            }
        }
        return result.join('');
    }
}
