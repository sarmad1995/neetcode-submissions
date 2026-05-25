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
    postorderTraversal(root) {
        let cur = root;
        const stack = [];
        const res = [];

        while (cur || stack.length) {
            if (cur) {
                stack.push(cur);
                res.push(cur.val);
                cur = cur.right;
            } else {
                const node = stack.pop();
                cur = node.left;
            }
        }
        console.log(res);
        return res.reverse();
    }
}
