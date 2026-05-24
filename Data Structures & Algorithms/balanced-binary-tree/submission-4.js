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
        const dfs = (root) => {
            if(!root) {
                return [true, 0];
            }
            let [leftBalanced, leftVal] = dfs(root.left)
            let [rightBalanced, rightVal] = dfs(root.right);
            const balanced = leftBalanced && rightBalanced && Math.abs(leftVal - rightVal) <= 1;
            return [balanced, Math.max(leftVal, rightVal) + 1];
        }
        return dfs(root)[0]

    }
}
