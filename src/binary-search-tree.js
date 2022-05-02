const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addNode(this.tree, data);

    function addNode(node, value) {
      if (!node) return new Node(value);
      if (node.data === value) return node;
      if (value < node.data) node.left = addNode(node.left, value);
      else node.right = addNode(node.right, value);

      return node;
    }
  }

  has(data) {
    return hasNode(this.tree, data);

    function hasNode(node, value) {
      if (!node) return false;
      if (node.data === value) return true;
      if (value < node.data) return hasNode(node.left, value);
      else return hasNode(node.right, value);
    }
  }

  find(data) {
    return findNode(this.tree, data);

    function findNode(node, value) {
      if (!node) return null;
      if (node.data === value) return node;
      if (value < node.data) return findNode(node.left, value);
      else return findNode(node.right, value);
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, value) {
      if (!node) return null;
      if (node.data > value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    return findMin(this.tree);

    function findMin(node) {
      if (!node) return null;
      if (!node.left) return node.data;

      return findMin(node.left);
    }
  }

  max() {
    return findMax(this.tree);

    function findMax(node) {
      if (!node) return null;
      if (!node.right) return node.data;

      return findMax(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};