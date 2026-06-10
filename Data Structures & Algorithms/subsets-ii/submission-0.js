class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(arr) {
        const res = [];
        this.backtrack([], arr, 0, res);
        return res;
    }

    backtrack(path, arr, idx, res) {
        if(idx >= arr.length) {
            return;
        }
        res.push([...path])
        const dup = new Set();
        for(let i = idx; i<arr.length; i++) {
            console.log({ i, l: arr.length})
            if(!dup.has(arr[i])) {
                dup.add(arr[i])
                path.push(arr[i]);
                this.backtrack(path, arr, i + 1, res)
                path.pop();
            }
        }
    }
}
