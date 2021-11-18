// stack implementation using linkelist
class Node {
    constructor(data) {
        this.value = data,
            this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null,
            this.length = 0;
    }
    append(data) {
        const myNode = new Node(data);
        if (this.length == 0) {
            this.top = myNode;
        }
        else {
            let holdingPointer = this.top;
            this.top = myNode;
            myNode.next = holdingPointer;
        }
        this.length++;
    }
    display() {
        console.log(this.top);
    }
    remove() {
        const newTop = this.top.next;
        this.top = newTop;
        this.length--;
    }
}
const myStack = new Stack();
myStack.append(1);
myStack.append(2);
myStack.append(3);
myStack.display();
myStack.remove();
myStack.display();