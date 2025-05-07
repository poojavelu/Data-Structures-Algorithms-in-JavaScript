class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " <-> ";
            }
        }
        console.log(output);
    }
 
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    reverseBetween(startIndex, endIndex) {
        if (!this.head || startIndex === endIndex) return;
        const dummy=new Node(0);
        dummy.next=this.head;
        this.head.prev=dummy;
        let prev=dummy;
        for(let i=0;i<startIndex;i++){
            prev=prev.next;
        }
        let current=prev.next;
        for(let i=0 ;i<endIndex-startIndex;i++){
            const nodeToMove = current.next;
            current.next=nodeToMove.next;
            if(nodeToMove.next){
                nodeToMove.next.prev=current;
            }
            nodeToMove.next = prev.next;
            prev.next.prev = nodeToMove;
    
            prev.next = nodeToMove;
            nodeToMove.prev = prev;
        }
        this.head = dummy.next;
        this.head.prev = null;
    }
    
}






// ------------------
// 🔍 Test Cases
// ------------------

console.log("Test 1: Reverse middle segment (1 to 4)");
const dll1 = new DoublyLinkedList(3);
[8, 5, 10, 2, 1].forEach(n => dll1.push(n));
console.log("BEFORE:");
dll1.printList();
dll1.reverseBetween(1, 4);
console.log("AFTER:");
dll1.printList();
console.log("-----------------------------------");

console.log("Test 2: Reverse full list");
const dll2 = new DoublyLinkedList(1);
[2, 3, 4, 5].forEach(n => dll2.push(n));
console.log("BEFORE:");
dll2.printList();
dll2.reverseBetween(0, 4);
console.log("AFTER:");
dll2.printList();
console.log("-----------------------------------");

console.log("Test 3: No-op on single node");
const dll3 = new DoublyLinkedList(9);
console.log("BEFORE:");
dll3.printList();
dll3.reverseBetween(0, 0);
console.log("AFTER:");
dll3.printList();
console.log("-----------------------------------");

console.log("Test 4: Reverse first few nodes");
const dll4 = new DoublyLinkedList(7);
[8, 9].forEach(n => dll4.push(n));
console.log("BEFORE:");
dll4.printList();
dll4.reverseBetween(0, 2);
console.log("AFTER:");
dll4.printList();
console.log("-----------------------------------");


