class BinaryHeap {
    constructor() {
        this.values = [];
    }

    /**
     * Relation from child to parent is (n - 1) / 2 => Floor
     * 
     * Bubbling up
     * - create a variable called index which is the length of the values property - 1
     * - Create a variable called parentIndex which is the floor of (index - 1) /2 
     * - Keep looping as long as the values element at the parentIndex is less 
     *   than the values element at the child index
     *     * Swap the values element at the parentIndex with the 
     *       element property at the child index.
     *     * Set the index as the parentIndex and start over.
     * 
     * @param {*} val 
     * @returns 
     */
    insert(val) {
        this.values.push(val);
        if(this.values.length === 1) return;
        // bubbling up.
        let index = this.values.length - 1; // 1
        let parentIndex = Math.floor((index - 1) / 2); // 0
        while(this.values[parentIndex] && this.values[index] && this.values[parentIndex] < this.values[index]) {
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    /**
     * Extract max
     * 
     * Swap the first value with the last value of the values array
     * pop from values, so we can return the value that is removed
     * - Approach is sink down
     *   - Parent index starts at root (at index 0)
     *   - Check the children (2 * n + 1) left, (2 * n + 2) right is great than parent
     *   - if it is greater, swap with the value with the one which is highest (of both)
     *   - the index that it got swapped becomes new index
     *   - Swap until the neither of the childs are not greater than parent
     * 
     */
    remove() {
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]
        const result = this.values.pop();
        let parentIndex = 0;
        while(true) {
            const leftIdx = 2 * parentIndex + 1;
            const rightIdx = 2 * parentIndex + 2;
            let leftChild = this.values[leftIdx];
            let rightChild = this.values[rightIdx];
            if(leftChild && rightChild ) {
                const rightDiff = rightChild - this.values[parentIndex]; 
                const leftDiff = leftChild - this.values[parentIndex];
                if (rightDiff > 0  && leftDiff > 0) {
                    if(rightDiff > leftDiff) {
                        [this.values[rightIdx], this.values[parentIndex]] = [this.values[parentIndex], this.values[rightIdx]];
                        parentIndex = rightIdx;
                    } else {
                        [this.values[leftIdx], this.values[parentIndex]] = [this.values[parentIndex], this.values[leftIdx]];
                        parentIndex = leftIdx;
                    }
                } else if (rightDiff > 0) {
                    [this.values[rightIdx], this.values[parentIndex]] = [this.values[parentIndex], this.values[rightIdx]];
                    parentIndex = rightIdx;
                } else if (leftDiff > 0) {
                    [this.values[leftIdx], this.values[parentIndex]] = [this.values[parentIndex], this.values[leftIdx]];
                    parentIndex = leftIdx;
                } else {
                    break;
                }
            } else {
                break;
            }
        }

        return result;
    }
}