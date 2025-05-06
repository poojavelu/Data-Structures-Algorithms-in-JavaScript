class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
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
                output += " -> ";
            }
        }
        console.log(output);
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
    swapPairs() {
        const dummy=new Node(0);
        let prev=dummy;
        dummy.next=this.head;
        let first=this.head;
        while(first!==null && first.next!==null){
            let second=first.next;
            prev.next=second;
            first.next=second.next;
            second.next=first;
            prev=first;
            first=first.next;
        }
        this.head=dummy.next
    }

}






// Test cases:
console.log("\nTest Case 1: Even number of nodes");
const ll1 = new LinkedList(1);
ll1.push(2);
ll1.push(3);
ll1.push(4);
console.log("BEFORE:");
ll1.printList();
ll1.swapPairs();
console.log("AFTER:");
ll1.printList();

console.log("\nTest Case 2: Odd number of nodes");
const ll2 = new LinkedList(1);
ll2.push(2);
ll2.push(3);
ll2.push(4);
ll2.push(5);
console.log("BEFORE:");
ll2.printList();
ll2.swapPairs();
console.log("AFTER:");
ll2.printList();

console.log("\nTest Case 3: Single node");
const ll3 = new LinkedList(1);
console.log("BEFORE:");
ll3.printList();
ll3.swapPairs();
console.log("AFTER:");
ll3.printList();

console.log("\nTest Case 4: Empty list");
const ll4 = new LinkedList(1);
ll4.makeEmpty();
console.log("BEFORE:");
ll4.printList();
ll4.swapPairs();
console.log("AFTER:");
ll4.printList();

