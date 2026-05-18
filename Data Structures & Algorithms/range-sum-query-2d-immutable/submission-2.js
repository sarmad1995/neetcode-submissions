class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {

        this.matrix = matrix;


        this.prefixSum = Array.from({
            length: matrix.length
        }, 
         () => Array(matrix[0].length).fill(0) 
        )

        for(let row = 0; row<this.prefixSum.length; row++) {
            for(let col = 0; col<this.matrix[0].length; col++) {
                const sum = (this.prefixSum?.[row]?.[col-1]) || 0;
                this.prefixSum[row][col] = sum + matrix[row][col]
            }
        }
        console.log('prefix', this.prefixSum)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let res = 0;

        for(let row = row1; row<= row2; row++) {
            const sum = this.prefixSum[row][col2] - (this.prefixSum[row][col1 - 1] || 0)
            res += sum;
        }
        return res;
    }

}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
