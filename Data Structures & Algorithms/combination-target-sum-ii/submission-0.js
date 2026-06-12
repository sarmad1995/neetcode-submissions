class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(arr, target) {
        arr.sort()
        const res = [];
        this.backtrack([], arr, target, res, 0)
        return res;
    }
    backtrack(path, arr, target, res, start) {
        if(target === 0) {
            res.push([...path])
            return;
        }
        if(target < 0) {
            return 
        }
        for(let i = start; i<arr.length; i++) {
            if(i > start && arr[i - 1] === arr[i]) continue;
            path.push(arr[i])
            this.backtrack(path, arr, target - arr[i], res, start + 1)
            path.pop();
        }
    }
}
