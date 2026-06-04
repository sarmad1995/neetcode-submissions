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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder, left = 0, right = inorder.length - 1) {
        let index = 0;
        const builder = (preorder, inorder, left, right) => {
            if (left > right) {
                return null;
            }
            const root = new TreeNode(preorder[index]);
            index++;
            const rootIndex = this.search(inorder, left, right, root.val);
            root.left = builder(preorder, inorder, left, rootIndex - 1);
            root.right = builder(preorder, inorder, rootIndex + 1, right);
            return root;
        };
        return builder(preorder, inorder, left, right);
    }

    search(arr, left, right, val) {
        for (let i = left; i <= right; i++) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    }
}
