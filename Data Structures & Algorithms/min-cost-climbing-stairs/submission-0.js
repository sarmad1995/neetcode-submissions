class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        const helper = (n) => {
            if(n < 2) {
                return 0
            }
            return Math.min(cost[n -1] + helper(n-1), 
                            cost[n -2] + helper(n-2))
        }

        return helper(cost.length)
    }
}
