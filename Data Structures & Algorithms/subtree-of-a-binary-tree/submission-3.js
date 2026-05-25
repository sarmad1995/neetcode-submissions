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
        const search = (root) => {
            if (!root) {
                return null;
            }
           
            const left = search(root.left);
            if (left === true) {
                return true;
            }
            const right = search(root.right);
            if (right === true) {
                return true
            }
            if (root.val === subRoot.val) {
                return this.sameTree(root, subRoot)
            }
            return null;
        };
        return search(root) ?? false;
    }

    sameTree(root1, root2) {
        if ((!root1 && !root2)) {
            return true;
        }
        if (root1 && root2 && root1.val === root2.val) {
            return this.sameTree(root1.left, root2.left) && this.sameTree(root1.right, root2.right);
        } else {
            return false;
        }
    }
}
