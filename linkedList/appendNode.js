// create a linkedlist and append the  new node
//10 -->16
class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(data) {
        const newNode = { //create new node to append values
            value: data,
            next: null
        }
        this.tail.next = newNode; // initially head and tail pointing to 10, now tail(10).next will point to newNode(tail is moving)
        this.tail = newNode;// tail points to newNode
        this.length++

    }
}
const myList = new LinkedList(10)
myList.append(16)
myList.append(20)
console.log(myList);