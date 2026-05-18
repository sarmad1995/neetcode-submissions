class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const prefixSum = [];

        for(let num of nums) {
            const sum = (prefixSum[prefixSum.length-1] || 0) + num;
            prefixSum.push(sum);
        }
        this.prefixSum = prefixSum;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const rightValue = this.prefixSum[right];
        const leftValue = this.prefixSum[left - 1] || 0;
        return rightValue - leftValue;
    }
}
