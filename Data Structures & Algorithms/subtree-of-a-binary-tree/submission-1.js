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
            if (root.val === subRoot.val) {
                return root;
            }
            const left = search(root.left);
            if (left) {
                return left;
            }
            const right = search(root.right);
            if (right) {
                return right;
            }
            return null;
        };
        const node = search(root);
        return this.sameTree(node, subRoot);
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
