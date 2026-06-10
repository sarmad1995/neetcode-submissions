class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(arr) {
        const res = [];
        arr.sort();
        this.backtrack([], arr, 0, res);
        return res;
    }

    backtrack(path, arr, idx, res) {
        res.push([...path])
        for(let i = idx; i<arr.length; i++) {
            if(i > idx && arr[i - 1] === arr[i]) continue;
                path.push(arr[i]);
                this.backtrack(path, arr, i + 1, res)
                path.pop();
            
        }
    }
}
