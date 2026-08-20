class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     * 
     * [10,20], 10
     * [30,200], 170
     * [400,50], -350
     * [30,20] - 10
     * 
     * 110
     */
    twoCitySchedCost(costs) {

        // a

        costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]))

        const N = costs.length;
        let result = 0
        for(let i = 0; i<costs.length; i++) {
            if(i >= N/2) {
                result += costs[i][1]
            } else {
                result += costs[i][0]
            }
        }

        return result;
    }
}
