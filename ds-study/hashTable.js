// Implementing a hash table

// First, create the HashTable class
class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    }

    // Implement a simple hashing function
    calculateHash(key) {
        return key.toString().length % this.size;
    }

    // Method to insert key/value pairs
    add(key, value) {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) { // 2. ...if the HashTable does NOT already have a property called "hash", we're creating it, along with an empty object to hold the incoming value
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) { // 3. and, if it's the new sub-object is currently empty (duh), we're going to increase HashTable's length by 1, because we'll be adding a value to it below
            this.length++;
        }
        this.values[hash][key] = value; // 1. the value WILL BE added REGARDLESS, but...
    }

    search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else {
            return null;
        }
    }
}

const ht = new HashTable();

ht.add('Canada', '300');
ht.add('Germany', '100');
ht.add('Italy', '50');

console.log(ht.search('Italy'));