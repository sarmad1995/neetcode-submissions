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
     */
    kthSmallest(root, k) {
        let count = 0;
        let res = root.val;
        let found = false;
        const dfs = (root) => {
            if(!root) {
                return null;
            }
            dfs(root.left);
            count++
            if(count === k ) {
                return res = root.val
            }
            dfs(root.right)
        }
        dfs(root);
        return res;
    }
}
