class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;

    while (current) {
      // if val is larger than current node - check right node
      if (val > current.val && current.right === null) {
        current.right = new Node(val);
        return this;
      } else if (val > current.val && current.right !== null) {
        current = current.right;
      } else if (val < current.val && current.left === null) {
        current.left = new Node(val);
        return this;
      } else if (val < current.val && current.left !== null) {
        current = current.left;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // if binary tree has no root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    if (val > current.val && current.right === null) {
      current.right = new Node(val);
      return this;
    } else if (val > current.val && current.right !== null) {
      return this.insertRecursively(val, current.right);
    } else if (val < current.val && current.left === null) {
      current.left = new Node(val);
      return this;
    } else if (val < current.val && current.left !== null) {
      return this.insertRecursively(val, current.left);
    }
  }

  //   /** find(val): search the tree for a node with value val.
  //    * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      }

      if (current.val < val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  //   /** findRecursively(val): search the tree for a node with value val.
  //    * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current.val === null) {
      return undefined;
    }
    if (current.val === val) {
      return current;
    }

    if (current.val < val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    } else {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    }
  }

  //   /** dfsPreOrder(): Traverse the array using pre-order DFS.
  //    * Return an array of visited nodes. */

  //   dfsPreOrder() {}

  //   /** dfsInOrder(): Traverse the array using in-order DFS.
  //    * Return an array of visited nodes. */

  //   dfsInOrder() {}

  //   /** dfsPostOrder(): Traverse the array using post-order DFS.
  //    * Return an array of visited nodes. */

  //   dfsPostOrder() {}

  //   /** bfs(): Traverse the array using BFS.
  //    * Return an array of visited nodes. */

  //   bfs() {}

  //   /** Further Study!
  //    * remove(val): Removes a node in the BST with the value val.
  //    * Returns the removed node. */

  //   remove(val) {}

  //   /** Further Study!
  //    * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  //   isBalanced() {}

  //   /** Further Study!
  //    * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //    * Otherwise return undefined. */

  //   findSecondHighest() {}
}

module.exports = BinarySearchTree;
