/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(root) {
        if(!root) {
            return null;
        }
        const visited = new Map();
        const clonedRoot = new Node(root.val)
        visited.set(root, clonedRoot)

        const queue = [root]
        while(queue.length > 0) {
            const node = queue.shift();
            const l = node.neighbors?.length;
            for(let i = 0; i<l; i++) {
                const n = node.neighbors[i];
                if(!visited.has(n)) {
                    visited.set(n, new Node(n.val))
                    queue.push(n);
                }
                const clonedNode = visited.get(node);
                clonedNode.neighbors.push(visited.get(n))
            }
        }   
        return clonedRoot;
    }
}
