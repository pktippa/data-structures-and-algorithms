class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

/**
 * Write a Min Binary Heap - lower number means higher priority
 * Queue contains nodes and each node has a value and priority
 * Use the priority to build the heap.
 * 
 * Enqueue method accepts a value and priority, makes a new node,
 * and puts it in the right spot based off of its priority.
 * 
 * Dequeue method removes root element, returns it, and rearranges
 * heap using priority (sink down/ opposite to Extract Max from Binary Heap)
 * 
 */
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {}

    dequeue() {}
}