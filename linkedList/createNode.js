// create a single node in  linkedlist where head and tail pointing to same node
//10 
class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

}
const myList = new LinkedList(10)
console.log(myList);