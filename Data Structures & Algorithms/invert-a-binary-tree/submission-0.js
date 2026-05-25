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
     * @return {TreeNode}
     */
    invertTree(root) {
        const dfs = (root) => {
            if(!root) {
                return root;
            }      
            let left = dfs(root.left)    
            let right = dfs(root.right)
            root.left = right;
            root.right = left;
            return root;
        }

        return dfs(root);
    }
}
