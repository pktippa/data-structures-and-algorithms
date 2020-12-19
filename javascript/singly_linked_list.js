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
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if(!this.head) return null;
        if(!this.head.next) {
            const item = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return item;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }   
    
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    
    unshift(val) {
        const n = new Node(val);
        if(!this.head){
            this.head = n;
            this.tail = n;
            this.length++;
            return this;
        }
        const currentHead = this.head;
        this.head = n;
        this.head.next = currentHead;
        this.length++;
        return this;
    }

    get(index) {
        if(index <0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if(!node) return false;
        node.val = val;
        return true;
    }
}