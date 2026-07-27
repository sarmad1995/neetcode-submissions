class Solution {
    /**
     * @param {number} n
     * @return {number}
     * 
     *            3
     *        2       1
     *     1   0    0
     *   0
     */
    climbStairs(n) {
        let total = 0;
        const map = {};
        const helper = (n) => {
            if(n === 0) {
                return 1;
            }
            if(n < 0) {
                return 0;
            }
            if(map[n]) {
                return map[n]
            }
            map[n-1] = helper(n - 1) 
            map[n-2] = helper(n- 2);
            return map[n-1] + map[n-2]
        }
        return helper(n)
    }
}
