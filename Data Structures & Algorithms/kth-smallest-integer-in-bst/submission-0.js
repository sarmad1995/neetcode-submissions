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
     * @param {number} k
     * @return {number}
     * 
     *    2
     *  1   3
     
     */
    kthSmallest(root, k) {
        const result = [];
        const dfs = (root) => {
            if (!root) {
                return;
            }

            dfs(root.left);
            if (result.length == k) {
                return;
            }
            result.push(root.val);
            dfs(root.right);
        };
        dfs(root);
        return result[result.length - 1];
    }
}
