class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        this.backstrack(0, nums, [], result, target, 0)
        return result;
    }   

    backstrack(idx, nums, path, result, target, sum) {
        if(sum === target) {
            result.push([...path])
        }
        console.log(idx)
        if(sum > target) {
            return;
        }
        for(let i = idx; i<nums.length; i++) {
            path.push(nums[i])
            this.backstrack(i, nums, path, result, target, sum + nums[i]) 
            path.pop();
        }
    }

}
