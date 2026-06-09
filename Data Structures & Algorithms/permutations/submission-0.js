class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        this.backstrack([], nums, res);
        return res;
    }
    backstrack(path, nums, res) {
        for (let i = 0; i < nums.length; i++) {
            if (!path.includes(arr[i])) {
                path.push(nums[i]);
                this.dfs(path, nums, res);
                path.pop();
            }
        }
    }
}
