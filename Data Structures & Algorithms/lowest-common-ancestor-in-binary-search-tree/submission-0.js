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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
      let res = undefined;
      const dfs = (node) => {
        if(!node) {
            return 0;
        } 

        const left = dfs(node.left)
        const right = dfs(node.right)
        let sum = left + right;
        if(node.val === p.val || node.val === q.val) {
            sum++;
        }
        if(sum === 2 && !res) {
            res = node;
        }
        return sum;
      }
      dfs(root);
      console.log(res)
      return res;
    }
}
