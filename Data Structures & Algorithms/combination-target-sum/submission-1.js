class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(arr, target) {
        const result = [];
        this.backtrack(0, [], arr, target, result)
        return result;
    }

    backtrack(idx, path, arr, target, result) {
        if(target === 0) {
            result.push([...path]);
            return;
        }
        if(target < 0) {
            return;
        }
        for(let i = idx; i<arr.length; i++) {
            path.push(arr[i])
            this.backtrack(i, path, arr, target - arr[i], result)
            path.pop();
        }
    }
}
