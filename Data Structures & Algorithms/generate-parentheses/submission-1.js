class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.backtrack(n, 0, 0, [], res)
        return res;
    }

    backtrack(n, open, close, curr, res,) {
        if(open === n && close === n) {
            res.push(curr.join(''))
            return;
        }
        if(open < n) {
            curr.push('(')
            this.backtrack(n, open + 1, close, curr, res)
            curr.pop();
        } 
        if(close < open) {
            curr.push(')')
            this.backtrack(n, open, close + 1, curr, res)
            curr.pop()
        }
    }
}
