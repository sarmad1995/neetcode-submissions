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
        const helper = (n) => {
            if(n === 0) {
                total++;
            }
            if(n < 0) {
                return;
            }
            helper(n - 1)
            helper(n- 2)
        }
        helper(n)
        return total;
    }
}
