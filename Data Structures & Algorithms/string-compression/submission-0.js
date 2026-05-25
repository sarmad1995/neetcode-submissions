class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {

        let n = chars.length, 
            k = 0,
            i = 0;

        while(i < n) {
            const cur = chars[i]
            let count = 0;

            while(i<n && cur === chars[i]) {
                count ++;
                i++;
            }
            if(count === 1) {
                chars[k++] = cur
            } else {
                chars[k++] = cur
                const countString = String(count);
                for(const char of countString) {
                    chars[k++] = char
                }
            }
            console.log(i)
        }
        console.log(k)
        return k
    }
}
