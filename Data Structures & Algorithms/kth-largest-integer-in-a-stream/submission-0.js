class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        const minHeap = new MinPriorityQueue();
        this.k = k;
        for(let i = 0; i<nums.length; i++) {
            minHeap.push(nums[i]);
            if(minHeap.size() > k) {
                minHeap.pop();
            }
        }
        this.minHeap = minHeap;

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);
        if(this.minHeap.size() > this.k) {
            this.minHeap.pop();
        }
        return this.minHeap.front()
    }
}
