class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if(this.length===0) {
            this.head = node;
            this.tail = node
            this.length++;
            return this;
        }

        const tail = this.tail;
        // set current tail next property = new node
        this.tail.next = node;
        // set new node prev property = existing tail
        this.tail.next.prev = tail;
        // reset tail to current node
        this.tail = node;
        this.length++;
        return this;
    }

    pop() {
        if(this.length ===0) return undefined;
        let currentNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let previous = this.tail.prev;
            previous.next = null;
            currentNode.prev = null;
            this.tail = previous;
        }
        this.length--;
        return currentNode.val;
    }

    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let next = this.head.next;
            next.prev = null;
            oldHead.next = null;
            this.head = next;
        }
        this.length--;
        return oldHead.val;
    }

    /**
     * create a new node
     * if length is 0, it is first node, so head and tail = new node
     * else
     *    current head.prev = new node
     *    new node.next = current head
     *    set head = new node
     * @param {*} val 
     */
    unshift(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            let prevHead = this.head;
            prevHead.prev = node;
            node.next = prevHead;
            this.head = node;
        }
        this.length++;
    
    }

    /**
     * if index is left of middle, search from start
     * else search from end
     * @param {*} index 
     */
    get(index){
        if (index <0 || index >= this.length) return null;
        const middle = this.length / 2;
        if (index <= middle) {
            // search from start
            let counter = 0;
            let current = this.head;
            while(counter !== index) {
                current = current.next;
                counter ++;
            }
            return current;
        } else {
            // search from the end
            let counter = this.length - 1;
            let current = this.tail;
            while(counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }

    set(index, value) {
        let found = this.get(index);
        if(found){
            found.val = value;
            return true;
        }
        return false;
    }

    printForward() {
        let current = this.head;
        while(current){
            console.log(current.val , ' ');
            current = current.next;
        }
    }

    insert(index, val) {
        if(index < 0 || index >= this.length) return false;
        if (index === 0) {
            this.unshift(val); return true;
        }
        if (index === this.length - 1) {
            this.push(val); return true;
        }
        let existingNode = this.get(index -1);
        let nextNode = existingNode.next;
        let newNode = new Node(val);
        existingNode.next = newNode;
        newNode.prev = existingNode;
        nextNode.prev = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    printBackward() {
        let current = this.tail;
        while(current){
            console.log(current.val , ' ');
            current = current.prev;
        }
    }
}