// :binarysearch:binarytree:
class Node {
  constructor (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor () {
    this.root = null
  }

  add (data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else return null
      }
      return searchTree(node)
    }
  }

  findMax () {
    let current = this.root
    while (current.right != null) {
      current = current.right
    }
    return current.data
  }

  findMin () {
    let current = this.root
    while (current.left != null) {
      current = current.left
    }
    return current.data
  }

  find (data) {
    let current = this.root
    while (current.data !== data) {
      if (data > current.data) current = current.right
      else current = current.left

      if (current === null) return null
    }
    return current.data
  }

  printVisual (node = this.root, prefix = '', isLeft = true) {
    if (node !== null) {
      console.log(prefix + (isLeft ? '├── ' : '└── ') + node.data)
      this.printVisual(node.left, prefix + (isLeft ? '│   ' : '    '), true)
      this.printVisual(node.right, prefix + (isLeft ? '│   ' : '    '), false)
    }
  }
}

const bst = new BST()
bst.add(10)
bst.add(5)
bst.add(15)
bst.add(3)
bst.add(7)
bst.add(12)
bst.add(18)
bst.add(19)

bst.printVisual()

console.log(bst.findMax())
console.log(bst.findMin())
console.log(bst.find(10))
