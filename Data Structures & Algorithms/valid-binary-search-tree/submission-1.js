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
    isValidBST(root) {
        const dfs = (root) => {
            if(!root) {
                return [true, null];
            }
            const [isValidL, leftNode] = dfs(root.left);
            const [isValidR, rightNode] = dfs(root.right);
            
            let isValid = isValidL && isValidR;
            if(leftNode) {
                isValid = isValid && leftNode.val < root.val;
            }
            if(rightNode) {
                isValid = isValid && rightNode.val > root.val;
            }
            return [isValid, root];
        }
        return dfs(root)[0]
    }
}
