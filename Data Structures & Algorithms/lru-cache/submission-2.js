
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
      this.capacity = capacity;

      this.right = new Node();
      this.left = new Node();

      this.right.prev = this.left;
      this.left.next = this.right;

      this.cache = new Map();
    
    }

    remove(node) {
      const prev = node.prev;
      const next = node.next;

      prev.next = next;
      next.prev = prev;
    }

    insert(node) {
      const prev = this.right.prev;
      prev.next = node;
      node.next = this.right;
      node.prev = prev;

      this.right.prev = node;
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

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
      if(this.cache.has(key)) {
        this.remove(this.cache.get(key))
      }
      const node = new Node(key, value);
      this.insert(node);
      this.cache.set(key, node)

      if(this.capacity < this.cache.size) {
        const lru = this.left.next;
        this.cache.delete(lru.key)
        this.remove(lru);
      }

    }
}
