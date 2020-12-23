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
}