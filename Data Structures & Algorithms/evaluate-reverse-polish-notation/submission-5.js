class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(const char of tokens) {
            if(char === '+' || char === '-' || char === '*' || char === '/') {
                const x = stack.pop();
                const y = stack.pop();
                const result = Math.trunc(this.operation(y,x, char));
                console.log(result)
                stack.push(result);
            } else {
                stack.push(parseInt(char))
            } 
        } 
        return stack[stack.length - 1]
    }

    operation(x, y, o) {
        if(o === '+') {
            return x + y;
        } else if(o === '-') {
            return x - y;
        } else if(o === '*') {
            return x * y;
        } else {
            return x / y
        }
    }
   
}
