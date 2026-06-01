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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        if(root && subRoot && root.val === subRoot.val) {
            return this.isSameTree(root, subRoot)
        }
        console.log(root)
        return this.isSubtree(root?.left, subRoot) || this.isSameTree(root?.right, subRoot)
    }

    isSameTree(root, subRoot) {
        if(!root && !subRoot) {
            return true;
        }
        if(root && subRoot && root.val === subRoot.val) {
            return this.isSameTree(root.left, subRoot.left) && this.isSameTree(root.right, subRoot.right)
        }
        return false;
    }
}
