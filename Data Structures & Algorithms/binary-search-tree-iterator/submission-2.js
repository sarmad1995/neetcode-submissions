/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.root = root;
        this.stack = [];
        this.iterator = [];

        let curr = root;
        while(curr || this.stack.length >0) {
            if(curr) {
                this.stack.push(curr);
                curr = curr.left;
            } else {
                const node = this.stack.pop();
                this.iterator.push(node.val); 
                curr = node.right;
            }
        }
        this.index = 0;
    }

    /**
     * @return {number}
     */
    next() {
        return this.iterator[this.index++]
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.iterator.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
