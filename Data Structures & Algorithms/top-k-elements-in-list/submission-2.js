class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const bucket = Array.from({ length: nums.length +1 }, () => []);

      const count = {};
      for(const num of nums) {
        count[num] = (count[num] || 0) + 1;
      }

      for(const n in count) {
        bucket[count[n]].push(parseInt(n));
      }
      const result = [];
     
      for(let i = bucket.length -1; i >=0; i--) {
        if (result.length >= k) break;
        const arr = bucket[i];
        if(!arr.length) continue;
        for(const n of arr) {
          result.push(n);
        }
      }
      return result;
    } 
}
