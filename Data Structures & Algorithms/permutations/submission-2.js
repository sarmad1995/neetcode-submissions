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
    backstrack(path, arr, res) {
        if(path.length === arr.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if (!path.includes(arr[i])) {
                path.push(arr[i]);
                this.backstrack(path, arr, res);
                path.pop();
            }
        }
    }
}
