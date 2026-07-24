class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0;
        let right = heights.length - 1;
        let max = 0
        while(left <= right) {
            const l = heights[left];
            const r = heights[right];
            const min = Math.min(l, r);
            const capacity = min * (right - left)
            max = Math.max(capacity, max)
            if(l < r) {
                left++
            } else {
                right--;
            }
        }
        return max;
    }
}
