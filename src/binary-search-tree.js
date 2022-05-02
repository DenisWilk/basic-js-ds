const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = new Node(null);
  }

  root() {
    return this.tree.data !== null ? this.tree : null;
  }

  add(data) {
    if (this.tree.data === null) return this.tree.data = data;

    function addNode(side, data) {
      if (side === null) return new Node(data);
      if (side.data === data) return side;
      if (side.data > data) side.left = addNode(side.left, data);
      if (side.data < data) side.right = addNode(side.right, data);

      return side;
    }

    this.tree = addNode(this.tree, data);
  }

  has(data) {
    return !this.find(data) ? false : true;
  }

  find(data) {
    return hasNode(this.tree, data);

    function hasNode(side, data) {
      if (side === null || side.data === null) return null;
      if (side.data === data) return side;
      if (side.data > data) return hasNode(side.left, data);
      if (side.data < data) return hasNode(side.right, data);

      return null;
    }
  }

  remove(data) {
    const removeNode = (side, data) => {
      if (!side.left & !side.right) return null;
      if (side.data < data) {
        side.right = removeNode(side.right, data);

        return side;
      }

      if (side.data > data) {
        side.left = removeNode(side.left, data);

        return side;
      }

      if (!side.left) return side = side.right;
      if (side.right === null) return side = side.left;

      let minRight = side.right;

      while (minRight.left) {
        minRight = minRight.left;
      }

      side.data = minRight.data;
      side.right = removeNode(side.right, minRight.data);

      return side;
    }

    this.tree = removeNode(this.tree, data);
  }

  min() {
    if (!this.tree) return null;

    let node = this.tree;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.tree) return null;

    let node = this.tree;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};