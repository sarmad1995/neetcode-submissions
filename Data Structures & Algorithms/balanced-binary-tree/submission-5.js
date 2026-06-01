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
                return [0, true]
            }
            const [leftH, leftBalanced] = dfs(root.left);
            const [rightH, rightBalanced] = dfs(root.right);

            const isBalanced = leftBalanced && rightBalanced && Math.abs(leftH - rightH) <= 1

            return [Math.max(leftH, rightH) + 1, isBalanced]
        }
        return dfs(root)[1]
    }
}
