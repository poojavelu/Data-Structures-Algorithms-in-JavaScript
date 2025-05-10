class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);

    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    } else {
      currentNode.right = this.#rInsert(value, currentNode.right);
    }
    return currentNode;
  }

  rInsert(value) {
    if (this.root === null) this.root = new Node(value);
    this.#rInsert(value);
  }

  rcontains(value, currentNode = this.root) {
    if (currentNode === null) return false;

    if (value === currentNode.value) return true;

    if (value < currentNode.value) {
      return this.rcontains(value, currentNode.left);
    } else {
      return this.rcontains(value, currentNode.right);
    }
  }

  minValue(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        currentNode = null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        let subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }
    return currentNode;
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root);
  }
}

let myBST = new BST();

myBST.rinsert(47);
myBST.rinsert(21);
myBST.rinsert(76);
myBST.rinsert(18);
myBST.rinsert(27);
myBST.rinsert(52);
myBST.rinsert(82);

console.log("BST Contains 27:");
console.log(myBST.rcontains(27));

console.log("\nBST Contains 17:");
console.log(myBST.rcontains(17));

/*
    EXPECTED OUTPUT:
    ----------------
    BST Contains 27:
    true
    
    BST Contains 17:
    false

*/
