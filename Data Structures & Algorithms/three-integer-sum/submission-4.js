class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /**
     * [-1,0,1,2,-1,-4]
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */
    threeSum(nums) {

        const result= new Set();
        nums.sort((a, b)=> a - b);
        for(let i = 0; i<nums.length; i++) {
            const num = nums[i];

            let left = i + 1;
            let right = nums.length -1;

            while(left < right) {
                const sum = nums[left] + nums[right];
                const totalSum = sum + num;
                if(totalSum === 0) {
                    result.add(`${num},${nums[left]},${nums[right]}`)
                    left ++;
                    right --;
                } else if(totalSum >0) {
                    right --;
                } else {
                    left ++;
                }
            }
        }
        return Array.from(result).map(s => s.split(','));
    }
}
