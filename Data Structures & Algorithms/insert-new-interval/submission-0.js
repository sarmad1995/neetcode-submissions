class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(arr, x) {
        const result = [];

        let i = 0;
        const n = arr.length;
        while(i < n && arr[i][1] < x[0]) {
            result.push(arr[i]);
            i++
        }

        while(i < n && arr[i][0] <= x[1]) {
            x[0] = Math.min(x[0], arr[i][0]);
            x[1] = Math.max(x[1], arr[i][1])
            i++;
        }

        result.push(x);

        while(i < n && i < arr.length) {
            result.push(arr[i])
            i++
        }
        return result;
    }
}
