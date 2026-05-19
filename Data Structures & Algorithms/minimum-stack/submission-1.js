class MinStack {
    constructor() {

        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length && this.minStack.length) {
            this.stack.push(val);
            const min = this.minStack[this.minStack.length -1];
            this.minStack.push(Math.min(min, val))
        } else {
            this.stack.push(val)
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length -1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length -1];
    }
}
