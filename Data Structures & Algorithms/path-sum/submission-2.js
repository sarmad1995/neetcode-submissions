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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if(!root) {
            return false;
        }
        const dfs = (node, curr) => {
            if(!node) {
                return 0;
            }
            const sum = curr + node.val;
            if(!node.right && !node.left) {
                if(sum === targetSum) {
                    return true;
                }
            }
            if(dfs(node.left, sum)) {
                return true;
            }
            if(dfs(node.right, sum)) {
                return true;
            }
            return false;
        }
        
        return dfs(root, 0)
        
    }
}
