class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

/**
 * Write a Min Binary Heap - lower number means higher priority
 * Queue con and each ntains nodesode has a value and priority
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

    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        if (this.values.length === 0) return;
        this.bubbleUp();
    }

    /**
     * get last element index which is inserted
     * get its parent element - if parent not available - break
     * if parent element value is greater than current element (min heap) do nothing
     *      then swap those values, set new index to parent index
     * else break
     */
    bubbleUp() {
        let index = this.values.length - 1;
        while(true) {
            const parentIndex = Math.floor((index -1) / 2);
            if (!this.values[parentIndex]) break;
            if (this.values[parentIndex].priority < this.values[index].priority) break;
            // swap
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
        }
    }

    /**
     * Extract Min
     * 
     * Swap the first value with the last value of the values array
     * pop from values, so we can return the value that is removed
     * - Approach is sink down
     *   - Parent index starts at root (at index 0)
     *   - Check the children (2 * n + 1) left, (2 * n + 2) right is great than parent
     *   - if it is smaller, swap with the value with the one which is smallest (of both)
     *   - the index that it got swapped becomes new index
     *   - Swap until the neither of the childs are not greater than parent
     * 
     */
    dequeue() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) {
            return this.values.pop();
        }
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        const toReturn = this.values.pop();
        this.sinkDown();
        return toReturn;
    }

    sinkDown() {
        let parentIndex = 0;
        while(true) {
            const left = (2 * parentIndex) + 1;
            const right = (2 * parentIndex) + 2;

            if (parentIndex >= this.values.length || left >= this.values.length) break;
            if (this.values[left] && this.values[right]) {
                if (this.values[left].priority > this.values[right].priority) {
                    if (this.values[parentIndex].priority < this.values[right].priority) {
                        [this.values[parentIndex], this.values[right]] = [this.values[right], this.values[parentIndex] ];
                        parentIndex = right;
                    } else if (this.values[parentIndex].priority < this.values[left].priority) {
                        [this.values[parentIndex], this.values[left]] = [this.values[left], this.values[parentIndex] ];
                        parentIndex = left;
                    } else {
                        break;
                    }
                } else {
                    if (this.values[parentIndex].priority < this.values[left].priority) {
                        [this.values[parentIndex], this.values[left]] = [this.values[left], this.values[parentIndex] ];
                        parentIndex = left;
                    } else if (this.values[parentIndex].priority < this.values[right].priority) {
                        [this.values[parentIndex], this.values[right]] = [this.values[right], this.values[parentIndex] ];
                        parentIndex = right;
                    } else {
                        break;
                    }
                }
            } else if (this.values[left] && this.values[parentIndex] < this.values[left]) {
                [this.values[parentIndex], this.values[left]] = [this.values[left], this.values[parentIndex] ];
                parentIndex = left;
            } else if (this.values[right] && this.values[parentIndex] > this.values[right]) {
                [this.values[parentIndex], this.values[right]] = [this.values[right], this.values[parentIndex] ];
                parentIndex = right;
            } else {
                break;
            }
        }
    }
}