class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let totalProfit = 0;
        for(let i = 0; i<prices.length - 1; i ++) {
            const profit = prices[i + 1] -prices[i] 
            if(profit > 0) {
                totalProfit += profit;
            }
        }
        return totalProfit;
    }
}
