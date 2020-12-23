// Stack is like linked list
// but shift and unshift methods are push and pop methods of Stack
// Stack contains the nodes as similar as singly linked list


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{ 

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
    insert at the begining of the list
    if it is first time then set head and tail to new node
    else update the next property new node to current head
    reset list head to new node
    return current length or size of the list
    **/
    push(val){
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let head = this.head;
            node.next = head;
            this.head = node;
        }
        return ++this.length;
    }

    /**
    shol
    */
    pop() {
        if(!this.head) return null;
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