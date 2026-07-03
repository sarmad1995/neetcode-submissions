class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * {
     *  2: true,
     *  20: true,
     *  4: true,
     *  10: true,
     *   3: true,
     *   4: true,
     *   5: true,
     * }
     * 
     * 
     * 
     * 
     */
    longestConsecutive(nums) {
        const freq = new Map();
        let result = 0;
        for(const n of nums) {
            freq.set(n, true)
        }

        for(const n of nums) {
            if(!freq.has(n -1)) {
                const arr = []; 
                arr.push(n); // 2 []
                while(freq.has(arr[arr.length - 1] + 1)) {
                    arr.push(arr[arr.length - 1] + 1); // [2, 3,4,5]
                }
                result = Math.max(result, arr.length)
            }
        }
        return result;
    }
}
