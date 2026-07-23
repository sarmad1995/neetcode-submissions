class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * 2 - 20 min more than 1? min -> 2 : current.push
     * 20 - 4 min 4
     * 
     * 
     * 
     * 
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let max = 0;
        for(const num of nums) {
            if(!set.has(num - 1)) {
                let current = num;
                let i = 1;
                while(set.has(current + 1)) {
                    current = current + 1
                    i++
                }
                max = Math.max(i, max)
            }
        }
     return max;
    }
}
