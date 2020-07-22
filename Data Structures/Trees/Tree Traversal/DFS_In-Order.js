// I shall be using a BST for this program, but the logic works for any tree

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;

            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // -------------------------------------------------------
    // The code for the DFS(In-Order) starts from here onwards
    // -------------------------------------------------------

    // My approach, same as Colt's solution
    DFS() {
        // Store the 'root' in a variable called current
        const current = this.root;

        // Create an array to store the result
        const result = [];

        // Create a helper function that accepts a node. This is to recursively perform DFS
        function traverse(node) {
            // The order in which we perform the next three steps is what makes it an In-order DFS

            // If the node has a 'left' property, then use it to recursively invoke the helper function
            if (node.left) traverse(node.left);

            // Push the node's value in the 'result' array
            result.push(node.val);

            // If the node has a 'right' property, then use it to recursively invoke the helper function
            if (node.right) traverse(node.right);
        }

        // Invoke the helper function using the 'current' node.
        traverse(current);

        return result;
    }
}
