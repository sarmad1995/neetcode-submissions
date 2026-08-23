class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(arr) {

       const result = [arr[0]];
       arr.sort((a, b) =>  {
        const diff = a[0] - b[0];
        if(diff === 0) {
            return a[1] - b[1]
        }
        return diff;
       });

       for(let i = 1; i<arr.length; i++) {
        const last = result[result.length -1];
        const curr = arr[i] // 1,5
        if(last[0] === curr[0]  || last[1] >= curr[0]) {
            last[0] = Math.min(last[0], curr[0]);
            last[1] = Math.max(last[1], curr[1]);
            result[result.length -1] = last;
        } else {
            result.push(curr)
        }
       }

       return result;

    }
}
