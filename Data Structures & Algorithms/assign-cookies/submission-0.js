class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     * 
     * Input: g = [1,4,5,7], s = [2,3,4,5]

        Output: 2
     */
    findContentChildren(g, s) {

        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);

        let l = 0;
        let r = 0;
        let res = 0;
        while(l < g.length && r < s.length) {
            if(g[l] <= s[r]) {
                res++;
                l++;
                r++;
            } else {
                r++;
            }
        }
        return res;
    }
}
