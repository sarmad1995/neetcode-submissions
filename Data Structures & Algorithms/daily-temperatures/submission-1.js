class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     * 
     * 
     * 
     * 
     * 
     * 
     *
     * [0,0,0,0,0,0,0]
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [temperatures[0]];

        for(let i = 1; i<temperatures.length; i ++) {
            const current = temperatures[i];
            const top = stack[stack.length -1][0];
            if(current < top) {
                stack.push([current, i])
            } else {
                while(stack[stack.length -1][0] < current) {
                    const pop = stack.pop();
                    result[pop[1]] = i - pop[1]
                    stack.push([current, i])
                }
            }
        }
        return result;

    }
}
