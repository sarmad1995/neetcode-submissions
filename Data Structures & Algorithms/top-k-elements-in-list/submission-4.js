class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map();
        const freq = new Array(nums.length);

        for(const n of nums) {
            if(map.has(n)) {
                map.set(n, map.get(n) + 1)
            } else {
                map.set(n, 1)
            }
        }
        for(const [num, count] of map) {
            if(freq[count]) {
                freq[count].push(num)
            } else {
                freq[count] = [num]
            }
        }
        const result = [];
        for(let i = freq.length -1; i >= 0; i--) {
            if(result.length >= k) {
                break;
            }
            if(freq[i] !== undefined) {
                const val = freq[i].pop();
                if(freq[i].length === 0) {
                    freq[i] = undefined;
                }
                result.push(val)
            }
        }
        return result;
    }
}
