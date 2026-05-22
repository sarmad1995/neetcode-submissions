class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowLength = matrix[0].length;
        let top = 0
        let bottom = matrix.length - 1;
        while(top <= bottom) {
            if(top === bottom) {
                return this.binarySearch(matrix[top], target)
            }
            const mid = Math.floor((top + bottom) / 2);
            const currentRowEnd = matrix[mid][rowLength - 1];
            const currentRowStart = matrix[mid][0];
            if(currentRowEnd >= target && currentRowStart <= target) {
                return this.binarySearch(matrix[mid],target)
            } else if (currentRowEnd > target) {
                bottom = mid -1;
            } else {
                top = mid + 1;
            }

        }
        return false;

    }

    binarySearch(arr, target) {
        let left = 0;
        let right = arr.length -1;

        while(left <= right) {
            const mid = Math.floor((right + left ) / 2);
            const current = arr[mid];
            if(current === target) {
                return true;
            } else if (current < target) {
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
        return false;
    }
}
