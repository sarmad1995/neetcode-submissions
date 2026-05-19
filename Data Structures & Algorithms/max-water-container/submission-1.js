class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {


        let area = -Infinity;


        let left = 0;
        let right = heights.length -1;

        while(left < right) {

            const l = heights[left];
            const r = heights[right];

            const height = Math.min(l, r);
            const width = right - left;
            area = Math.min(height * width, area);

            if(l < r) {
                left ++
            } else {
                right --;
            }
        }
        return area;
    }
}
