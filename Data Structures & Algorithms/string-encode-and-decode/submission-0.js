class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     * 5Hello5World
     */
    encode(strs) {
        const arr = [];
        for (let word of strs) {
            arr.push(word.length, word);
        }
        return arr.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = [];
        
        let left = 0;
        while(left < str.length) {
            const limit = Number(str[left]);
            const word = []
            for(let i = left + 1; i<left + 1 + limit; i++) {
                console.log(str[i])
                word.push(str[i])
            }
            arr.push(word.join(''))
            left = left + limit + 1;
        }
        console.log(arr)
        return arr;
    }
}
