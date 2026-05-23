/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 * 
 *     5
 *.    
 * 
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(!root) {
            return root;
        }

        if(key < root.val ) {
            root.left = this.deleteNode(root.left, key)
        } else if(key > root.val) {
            root.right = this.deleteNode(root.right, key)
        } else {
            // found
            if(!root.left) {
                root = root.right;
            } else if(!root.right) {
                root = root.left;
            } else {
                root.val = this.minValue(root.right);
                root.right = this.deleteNode(root.right, root.val)
            }
        }
        return root;
    }

    minValue(root) {
        let min = root.val;
        let cur = root;
        while(cur && cur.left) {
            min = cur.left.val;
            cur = cur.left;
        }
        return min;
    }
}
