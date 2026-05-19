class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a,b) => a - b);
        const result = []
        for(let i = 0; i<nums.length -1; i++) {
            const val = nums[i];
            if (val === nums[i -1]) {
                continue;
            }
            let left = i + 1;
            let right = nums.length -1;
            while(left < right) {
                const l = nums[left];
                const r = nums[right];

                const sum = l + r;

                if(sum + val === 0) {
                    result.push([val, l, r])
                    left ++ 
                    right --;
                } else if(sum + val > 0) {
                    right --;
                } else {
                    left ++;
                }
            }
        }
        return result;
    }
}
