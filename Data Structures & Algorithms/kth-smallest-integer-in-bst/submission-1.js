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
        let found = 0;
        let max = -Infinity;
        const dfs = (root) => {
            if (!root) {
                return;
            }
            dfs(root.left);
            if (found == k) {
                return;
            }
            found ++;
            max = Math.max(max, root.val)
            dfs(root.right);
        };
        dfs(root);
        return max
    }
}
