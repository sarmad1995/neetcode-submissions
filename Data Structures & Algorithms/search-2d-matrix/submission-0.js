class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * 
     * 
     * [1,2,3,4,5,6]
     */
    searchMatrix(matrix, target) {

        const n = matrix[0].length -1 
        for(let row = 0; row<matrix.length -1; row++) {
            const left = matrix[row][0];
            const right = matrix[row][n];
            if(target <= right && target >= left) {
               console.log("Found", row, target)
                return this.binarySearch(matrix[row], target)
            }
        }
        return -1
    }


    binarySearch(arr, target) {
        let left = 0;
        let right = arr.length -1;
        while(left <= right) {
            const mid = Math.trunc((right + left) /2);
            if(target === arr[mid]) {
                return true;
            } else if(target > arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return false
    }
}
