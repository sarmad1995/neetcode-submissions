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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) {
            return [];
        }
        const queue = [root];
        const result = [];
        while (queue.length > 0) {
            const l = queue.length;
            let last = undefined;
            for (let i = 0; i < l; i++) {
                const node = queue.shift();
                last = node.val;
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
            if (last) {
                result.push(last);
            }
        }
        return result;
    }
}
