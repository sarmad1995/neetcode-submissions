class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     * 
     * 
     */

    letterCombinations(digits) {
        if(!digits) {
            return []
        }
        const map = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z']
        }
        const result = [];
        this.backtrack([], digits, 0, result, map)
        return result;
    }

    backtrack(path, digits, currentIdx, result, map) {
        if(path.length === digits.length) {
            result.push(path.join(''))
            return;
        }
        const num = digits[currentIdx];
        for(let i = 0; i< map[num].length; i++) {
            path.push(map[num][i])
            this.backtrack(path, digits, currentIdx + 1, result, map)
            path.pop(map[num][i])
        }
    }
}





        //      g      h     i 
        //    g h i  g h i  ghi 