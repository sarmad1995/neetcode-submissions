class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     */
    twoCitySchedCost(costs) {

        const arr = [];
        let result = 0;
        const N = costs.length;
        for(let i = 0; i<N; i++) {
            const [a, b] = costs[i]
            arr[i] = [a, b, b - a];
        }
        arr.sort((a, b) => b[2] - a[2]);

        console.log(arr)

        for(let i = 0; i<N; i++) {
            const curr = arr[i];
            if(i >= N/2) {
                result += curr[1]; 
            } else {
                result += curr[0];
            }
        }

        return result;

    }
}
