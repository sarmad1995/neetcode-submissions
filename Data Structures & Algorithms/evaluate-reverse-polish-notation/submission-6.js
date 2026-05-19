class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     * 
     * 1,2,3,4 + / 
     */
    evalRPN(tokens) {

        const stack = [];
        for(let i = 0; i<tokens.length; i ++) {
            const char = tokens[i]
            if(char === '-' || char === '+' || char === '/' || char === '*') {
                const x = stack.pop();
                const y = stack.pop();
                const result = this.operation(y, x, char);
                stack.push(result);
            } else {
                stack.push(parseInt(char))
            } 
        }
        return stack[stack.length -1]

    }


    operation(a,b, o) {
        if(o === '-') {
            return a + b;
        } else if (o === '*') {
            return a * b;
        } else if (o === '-') {
            return a - b;
        } else if (o === '/') {
            return a / b;
        }
    }
}
