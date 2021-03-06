// Andrei's Udemy course: DS and Algo in Javascript

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
    }
}

const newArray = new MyArray();
console.log(newArray);