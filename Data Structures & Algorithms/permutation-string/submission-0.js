class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const freq = new Array(26).fill(0);
        for(const ch of s1) {
            const code = ch.charCodeAt(0) - 97;
            freq[code] = freq[code] + 1;
        }
        const k = s1.length;
        
        const freq2 = new Array(26).fill(0);

        for(let i = 0; i<k; i++) {
            const code = s2[i].charCodeAt(0) - 97;
            freq2[code] = freq2[code] + 1;
        }
        if(this.areFreqEqual(freq, freq2)) {
            return true;
        }
        for(let r = k; r<s2.length; r++) {
            const idx = s2[r-k].charCodeAt(0) - 97;
            freq2[idx] = freq2[idx] - 1;

            const code = s2[r].charCodeAt(0) - 97;
            freq2[code] = freq2[code] + 1;
            if(this.areFreqEqual(freq, freq2)) {
                return true;
            }
        }
        return false;
    }

    areFreqEqual(freq1, freq2) {
        return freq1.join('') === freq2.join('')
    }
}
