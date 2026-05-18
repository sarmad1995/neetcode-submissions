class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefixSum = [];

        for(const num of nums) {
            const sum = (this.prefixSum[this.prefixSum.length -1] || 0) + num
            this.prefixSum.push(sum)
        }
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
