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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) {
            return []
        }
        const result = [];
        const queue = [root];
        while(queue.length > 0) {
            const l = queue.length;
            const level = [];
            for(let i = 0; i<l; i++) {
                const node = queue.shift();
                if(node.left) {
                    queue.push(node.left);
                }
                if(node.right) {
                    queue.push(node.right);
                }
                level.push(node)
            }
            result.push(level)
        }
        return result;
    }
}
