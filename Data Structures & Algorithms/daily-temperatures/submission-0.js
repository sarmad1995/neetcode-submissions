class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {

        /**
         * [30,38,30,36,35,40,28]
         * 1,4,1,2,1,0,0]
         * 
         * [30, 30] [38, 30], [30]
         */

        const stack = [];
        const result = new Array(temp.length).fill(0);

        for(let i = 0; i < temp.length ; i++) {
                while(stack.length !== 0 && stack[stack.length-1][0] < temp[i]) {
                    const [_, index] = stack.pop();
                    result[index] = i - index;
                }
                stack.push([temp[i], i ])
            }
        return result;
    }
}
