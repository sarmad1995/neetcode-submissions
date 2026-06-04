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
     * @return {number}
     */
    goodNodes(root) {
        let max = -Infinity;
        let goodNodes = 0;
        const dfs = (node, m) => {
            if(!node) {
                return null;
            }   
            // if good node 
            if(node.val >= m) {
                goodNodes++;
                max = node.val;
            }   
            dfs(node.left, max);
            dfs(node.right, max);
        }
        dfs(root, max);
        return goodNodes;
    }
}
