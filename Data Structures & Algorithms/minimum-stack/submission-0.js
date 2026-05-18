class MinStack {
    /**
     * 
     * [[4,4], [2,2], [6, 2], [8, 2], [1, 1] ]
     */
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length === 0) {
            this.stack.push([val, val])
        } else {
            const min = this.stack[this.stack.length -1][1];
            if(min < val) {
                this.stack.push([val, min])
            } else {
                this.stack.push([val, val]);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()[0]
    }

    /**
     * @return {number}
     */
    top() {
        return  this.stack[this.stack.length -1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length -1][1]
    }
}
