class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {

        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);

        let l = 0;
        let r = 0;
        let ans = 0;
        while(l <g.length && r < s.length) {
            if(s[r] >= g[l]) {
                r++;
                ans++;
            }
            l++
        }
        return ans;
    }
}
