class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    /**
     * 
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(14);
tree.insert(8);
tree.insert(9);
tree.insert(5);
tree.insert(12);
tree.insert(17);

     */
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if(!this.root) {
            console.log('no root, setting the root now');
            this.root = node;
            return;
        }
        let root = this.root;
        while(true){
            // go to right
            if(val > root.val) {
                console.log('RIGHT')
                if(root.right === null) {
                    console.log('NO RIGHT, setting as right');
                    root.right = node;
                    return;
                } else {
                    console.log('Right exists ', root.right.val);
                    root = root.right;
                    continue;
                }

            }

            // go to left
            else {
                console.log('LEFT');
                if(root.left === null) {
                    console.log('NO LEFT, setting as left');
                    root.left = node;
                    return;
                } else {
                    console.log('Left exists ', root.left.val);
                    root = root.left;
                    continue;
                }

            }
        }
    }

    find(val) {
        if(this.root === null) return false;
        if(this.root.val === val) return true;
        let root = this.root;
        while(root.val !== val) {
            // go left
            if(root.val > val) {
                if(root.left){
                    root = root.left;
                    continue;
                } else {
                    return false;
                }
            }
            // go right
             else {
                if(root.right) {
                    root = root.right;
                    continue;
                } else {
                    return false;
                }
             }
        }
        return true;
    }

    /**
     * BFS uses queue to keep track of nodes that are need to be traversed
     * Enqueue (push) tree root on the queue
     * Loop through queue until it is empty
     *  - dequeue (shift) the elemenet
     *  - check and add to queue if element has left
     *  - check and add to queue if element has right   
     * 
     * @returns Array
     */
    bfs() {
        const result = [];
        if (!this.root) return result;
        const queue = [];
        queue.push(this.root)
        while(queue.length > 0) {
            const element = queue.shift();
            result.push(element.val);
           
            if (element.left) {
                queue.push(element.left);
            }
            if (element.right) {
                queue.push(element.right);
            }
        }
        // console.log(tree.bfs());
        // [10, 8, 14, 5, 9, 12, 17]
        return result;
    }

    /**
     * 
     * Result importance:
     * 
     * The output of PreOrder can be used to reconstruct the tree with the order of elements
     * 
     * Look on the left side first, once all the nodes on left are done
     * the check for right
     * 
     * Create a variable to store the returning values of nodes visited
     * Store the root of the tree to current
     * 
     * (Recursion)
     * Write a helper function (preorder traverse) which accepts a node
     * - Push the value of node (since it is visited) to the nodes visited store
     * - if the node has left, call the same function (recurse - preorder traverse) with node.left
     * - if the node has right, call the same function (recurse - preorder traverse) with node.right
     */
     DFS_PreOrder() {
        const result = [];
        const preOrderTraverse = (node) => {
            result.push(node.val);
            if (node.left) preOrderTraverse(node.left);
            if (node.right) preOrderTraverse(node.right);
        }
        preOrderTraverse(this.root);
        // console.log(tree.DFS_PreOrder());
        // [10, 8, 5, 9, 14, 12, 17]
        return result;
    }

    /**
     * Only change with preorder to the post order traversal of nodes
     * is we will add to the visited listed after traversal!
     * where as in pre order we add to the list before traversal (recursive) function
     * @returns 
     */
    DFS_PostOrder() {
        const result = [];
        const postOrderTraverse = (node) => {
            if (node.left) postOrderTraverse(node.left);
            if (node.right) postOrderTraverse(node.right);
            result.push(node.val);
        }
        postOrderTraverse(this.root);
        // console.log(tree.DFS_PreOrder());
        // [5, 9, 8, 12, 17, 14, 10]
        return result;
    }

    /**
     * As the name suggests the ouput of the DFS In order is 
     * ordered elements from lowest to highest, observe
     * [5, 8, 9, 10, 12, 14, 17]
     * 
     * Traverse the entire left and then visit the node and 
     * then traverse the entire right
     * 
     * 
     */
    DFS_InOrder() {
        const result = [];
        const inOrderTraverse = (node) => {
            if(node.left) inOrderTraverse(node.left);
            result.push(node.val);
            if(node.right) inOrderTraverse(node.right);
        }
        inOrderTraverse(this.root);
        // [5, 8, 9, 10, 12, 14, 17]
        return result;
    }
}