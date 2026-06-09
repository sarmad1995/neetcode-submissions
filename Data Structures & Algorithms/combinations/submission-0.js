class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];
        const comb = [];
        this.dfs(1, n, k, res, comb)
        return res;
    }

    dfs(idx, n, k , res, comb) {
        if(comb.length == k) {
            res.push([...comb])
            return 
        }
        for(let i = idx; i<=n; i++){
            comb.push(i)
            this.dfs(i + 1, n, k, res, comb)
            comb.pop();
        }
    }
}
