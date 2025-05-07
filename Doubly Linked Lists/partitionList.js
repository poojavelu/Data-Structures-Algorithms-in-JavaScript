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

    partitionList(x) {
        if (!this.head) return;
        const dummy1=new Node(0);
        const dummy2=new Node(0);
        let prev1=dummy1;
        let prev2=dummy2;
        let current=this.head;
        while(current!==null){
            const nextNode = current.next;
            current.next = null;
            current.prev = null;
            if(current.value<x){
                prev1.next=current;
                current.prev=prev1;
                prev1=current;
            }else{
                prev2.next=current;
                current.prev=prev2;
                prev2=current;
            }
            current=nextNode;
        }
        prev2.next=null;
        prev1.next=dummy2.next;
        if (dummy2.next) {
            dummy2.next.prev = prev1;
        }
        this.head=dummy1.next;
        if (this.head) {
            this.head.prev = null;
        }
    }
    
}






// ------------------
// 🔍 Test Cases
// ------------------

console.log("===================================");
console.log("Test Case 1: Partition around x = 5");
console.log("===================================");
const dll1 = new DoublyLinkedList(3);
dll1.push(8);
dll1.push(5);
dll1.push(10);
dll1.push(2);
dll1.push(1);
console.log("BEFORE partitionList(5):");
dll1.printList();
dll1.partitionList(5);
console.log("AFTER partitionList(5):");
dll1.printList();

console.log("\n==========================================");
console.log("Test Case 2: All nodes less than x = 5");
console.log("==========================================");
const dll2 = new DoublyLinkedList(1);
dll2.push(2);
dll2.push(3);
console.log("BEFORE partitionList(5):");
dll2.printList();
dll2.partitionList(5);
console.log("AFTER partitionList(5):");
dll2.printList();

console.log("\n==========================================");
console.log("Test Case 3: All nodes greater than x = 5");
console.log("==========================================");
const dll3 = new DoublyLinkedList(6);
dll3.push(7);
dll3.push(8);
console.log("BEFORE partitionList(5):");
dll3.printList();
dll3.partitionList(5);
console.log("AFTER partitionList(5):");
dll3.printList();

console.log("\n=============================");
console.log("Test Case 4: Empty list, x = 5");
console.log("=============================");
const dll4 = new DoublyLinkedList(1);
dll4.makeEmpty();
console.log("BEFORE partitionList(5):");
dll4.printList();
dll4.partitionList(5);
console.log("AFTER partitionList(5):");
dll4.printList();

console.log("\n=================================");
console.log("Test Case 5: Single node, x = 5");
console.log("=================================");
const dll5 = new DoublyLinkedList(1);
console.log("BEFORE partitionList(5):");
dll5.printList();
dll5.partitionList(5);
console.log("AFTER partitionList(5):");
dll5.printList();


