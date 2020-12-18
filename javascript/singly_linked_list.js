// A singly linked list contains nodes.
// A singly linked list contains Head and tail
// The Head and tail are always null
// Each node tail is pointing to next val
// it has length property

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * if this is first element (both head and tail are null)
     * set both head and tail to first element.
     * 
     * if it is second or next time.
     * 
     * @param {*} val Node
     */
    push(val) {
        const n = new Node(val);
        if(!this.head && !this.tail) {
            this.head = n;
            this.tail = n;
            this.length += 1;
        } else {
            const tail = this.tail;
            tail.next = n;
            this.tail = n;
            this.length += 1;
        }
    }

    
}