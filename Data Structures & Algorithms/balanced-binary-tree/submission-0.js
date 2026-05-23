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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) {
            return true;
        }
        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);

        if(Math.abs(leftHeight - rightHeight) <= 1) {
            return true;
        }
        return false;
    }

    getHeight(root) {
        if(!root) {
            return 0;
        }
        let left = this.getHeight(root.left)
        let right = this.getHeight(root.right)
        return Math.max(left, right) + 1
    }
}
