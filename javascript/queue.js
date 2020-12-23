class Node{
    constructor(val) {
        this.next = null;
        this.val = val; 
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Insert from tail
    enqueue(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.tail = node;
            this.head = node;
            return ++this.length;            
        }
        let tail = this.tail;
        tail.next = node;
        this.tail = node;
        return ++this.length;
    }

    // remove from head
    dequeue() {
        if(!this.head) {
            return null;
        }
        if(this.length === 1) {
            let head = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return head.val;
        }
        let head = this.head;
        let next = head.next;
        this.head = next;
        head.next = null;
        this.length--;
        return head.val;
    }
}