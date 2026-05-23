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
        return this.dfs(root)[0];
    }

    dfs(root) {
        if(!root) {
            [true, 0]
        }
        let [leftBal, leftH] = this.dfs(root.left)
        let [rightBal, rightH] = this.dfs(root.right)

        const balanced = leftBal && rightBal && Math.abs(leftH + rightH) <= 1;
        const height = 1 + Math.max(leftH, rightH);
        return [balanced, height]
    }
}
