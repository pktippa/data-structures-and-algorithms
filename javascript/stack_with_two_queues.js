class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    // perform enqueue operation on queue which is non empty
    // check q1 and then q2 (assume only one queue is not empty at any time)
    // 
    push(val) {
        if(this.q1.size === 0) {
            this.q2.enqueue(val);
        } else {
            this.q1.enqueue(val);
        }
        return this;
    }

    // return a val
    // check which is not empty, if q1 is not empty, move all except last one to q2
    // and return the last one form q1. vice versa for q2
    pop() {
        if(this.q1.size !== 0) {
            while(this.q1.size > 1) {
                this.q2.enqueue(this.q1.dequeue());
            }
            const last = this.q1.dequeue();
            return last;
        } else {
            while(this.q2.size > 1 ) {
                this.q1.enqueue(this.q2.dequeue());
            }
            const last = this.q2.dequeue();
            return last;
        }
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const s = new Stack();
const n = s.push(10).push(20).push(30);
console.log(s.pop());
