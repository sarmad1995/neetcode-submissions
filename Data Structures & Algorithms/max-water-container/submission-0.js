class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {


        let left = 0;
        let right = heights.length -1;

        let maxArea = -Infinity;

        while(left < right) {
            const leftValue = heights[left];
            const rightValue = heights[right];

            const height = Math.min(leftValue, rightValue);
            const width = right - left;
            const area = height * width;

            maxArea = Math.max(area, maxArea)

            if(leftValue < rightValue) {
                left ++
            } else {
                right --;
            }
        }
        return maxArea;
    }
}
