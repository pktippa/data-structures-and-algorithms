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
    if (!this.head && !this.tail) {
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
    if (!this.head) return null;
    if (!this.head.next) {
      const item = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return item;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const n = new Node(val);
    if (!this.head) {
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

  rotate(num) {
    if(this.length === 0 || this.length === 1) { return;}
    let rot_val = num % this.length;
    if(rot_val === 0){return;} 
    if (rot_val < 0) {
      rot_val = this.length + rot_val;
    }
    const prev = this.get(rot_val - 1);
    const newHead = prev.next;
    prev.next = null;
    const ex_tail = this.tail;
    const head = this.head;
    ex_tail.next = head;
    this.tail = prev;
    this.head = newHead;
    console.log(prev); //
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);

      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    const newNode = new Node(val);
    const foundNode = this.get(index - 1);
    const prevNext = foundNode.next;
    foundNode.next = newNode;
    newNode.next = prevNext;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prvNode = this.get(index - 1);
    const afterNode = prvNode.next.next;
    const returnNode = prvNode.next;
    prvNode.next = afterNode;
    this.length--;
    return returnNode;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

{
  const s = new SinglyLinkedList();
  s.push(5).push(10).push(15).push(20).push(25);
  console.log(s.head.val); // 5
  console.log(s.tail.val); // 25
  
  s.rotate(3);
  console.log(s.head.val); //20
  console.log(s.tail.val); // 15

  s.rotate(-1);
  console.log(s.head.val); //25
  console.log(s.tail.val); //5
}