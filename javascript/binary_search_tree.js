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
}