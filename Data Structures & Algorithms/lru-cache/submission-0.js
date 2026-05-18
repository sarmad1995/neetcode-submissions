class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.cap = capacity;
        this.left = new Node(0, 0);
        this.right = new Node(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
       if(this.cache.has(key)) {
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.val;
       }
       return -1;
    }

    insert(node) {
        const prev = this.right.prev;

        node.next = this.right;
        node.prev = prev;

        prev.next = node;
        this.right.prev = node;
    }

    remove(node) {
        const next = node.next;
        const prev = node.prev;

        next.prev = prev;
        prev.next = next;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const node = new Node(key, value);
        this.cache.set(key, node);
        this.insert(node)


        if(this.cache.size > this.cap) {
            const node = this.left.next;
            this.remove(node);
            this.cache.delete(node.key);
        }
      
    }
}
