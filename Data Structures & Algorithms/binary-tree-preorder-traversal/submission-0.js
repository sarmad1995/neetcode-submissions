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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let cur = root;
        const stack = [];
        const result = [];
        while (cur || stack.length > 0) {
            if (cur) {
                result.push(cur.val);
                stack.push(cur)
                cur = cur.left;
            } else {
                const node = stack.pop();
                cur = node.right;
            }
        }
     return result;
    }
}
