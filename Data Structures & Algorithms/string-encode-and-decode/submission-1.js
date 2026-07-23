class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     * 5Hello5World
     */
    encode(strs) {
        const arr = [];
        for (let word of strs) {
            arr.push(word.length,'#', word);
        }
        return arr.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = [];
        let i = 0;

        while(str.length > i) {
            let j = i;

            while(str[j] != '#') j++
            const len = parseInt(str.substring(i, j));
            i = j + 1;
            arr.push(str.substring(i, i + len))
            i += len;
        }
        return arr;
    }
}
