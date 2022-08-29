class LinkedListNode {

    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

class LinkedList {

    constructor() {

        this.head = null;
        this.tail = null;

    }

    prepend (value) {
        let node = new LinkedListNode(value);

        node.next = this.head; 
        this.head = node;

    }
    append (value) {

        let node = new LinkedListNode(value);

        if (this.head === null) {
            this.head = node; 

        } else {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = new LinkedListNode(value);
            this.tail = current.next;
        }


    }
    delete (value) {
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.value === value) {
                if (previous === null) {
                    this.head = current.next;
                    if (this.tail === this.head) {
                        this.tail = null;

                    }
                } else {
                    previous.next = current.next;
                    if (current === this.tail) {
                        this.tail = previous;
                        if (this.tail === this.head) {
                            this.tail = null;

                        }
                    }
                }

            }
            previous = current;
            current = current.next;

        }

    }
    find (value) {
        let current = this.head; 

        while(current) {
            if (current.value === value) {
                return current;
            }
            
            current = current.next;
        }

    }
    deleteFromTail() {
        let current = this.head
        let previous = null;

        while(current.next) {
            previous = current;
            current = current.next;
            
        }

        previous.next = current.next; 
        this.tail = previous;

        if (this.head === this.tail) {
            this.tail = null

        }

        
    }
    deleteFromHead() {
        let current = this.head; 
    
        this.head = current.next;

        if (this.head === this.tail) {
            this.tail = null

        }
        
        
    }
}

let test = new LinkedList;

test.append("hello");
test.append("world");
// test.append("it is");
// test.append("me");
// test.append("what's");
// test.append("up");


