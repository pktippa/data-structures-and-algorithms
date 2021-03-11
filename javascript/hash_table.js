class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96; // 'a'.charCodeAt(0) - 96 === 1 // true
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    /**
     * 1. Accepts a key and value
     * 2. Hashes the key and get a number
     * 3. Store the key-value pair in the hash table array via separate chaining.
     * 
     * Separate chaining includes storing multiple values (each value is separate index)
     *  if value doesnt exists create empty array and add first element
     *  if value exists push a new array element to value array
     * @param {*} key string
     * @param {*} value any
     */
    set(key, value) {
        const idx = this._hash(key);
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
        } else {
            // check if the array already contains same key, if so, replace the value
            for(let i =0; i < this.keyMap[idx].length; i++) {
                const [elKey, elValue] = this.keyMap[idx][i];
                if (elKey === key) {
                    console.log('replacing value, original = ', elValue);
                    this.keyMap[idx][i][1] = value;
                    return;
                }
            }
        }
        this.keyMap[idx].push([key, value]);
    }

    /**
     * 1. Accepts a key
     * 2. hashes the key
     * 3. Retrieves the key-value pair in the hash HashTable
     * 4. if key isnt found returns undefined
     * @param {*} key 
     */
    get(key) {
        const idx = this._hash(key);
        if (!this.keyMap[idx]) return undefined;
        for(let i =0; i < this.keyMap.length; i++) {
            const [elKey, elValue] = this.keyMap[idx][i];
            if (elKey === key) {
                return elValue;
            }
        }
        return undefined;
    }
}