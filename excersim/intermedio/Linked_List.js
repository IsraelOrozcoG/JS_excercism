class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    

    add(element) {
        let node = new Node(element);
        let actual = null;
        if (this.head == null) {
            this.head = node;
        } else {
            actual = this.head;
            while (actual.next) {
                actual = actual.next;
            }
            actual.next = node;
        }
        this.size++;
    }
    delete(element) {
        let actual = this.head;
        let past = null;
        while (actual != null) {
            if (actual.element === element) {
                if (past === null) {
                    this.head = actual.next;
                } else {
                    past.next = actual.next;
                }
                this.size--;
                return actual.element;
            }
            past = actual;
            actual = actual.next;
        }
        return -1;
    }

    deleteFirst() {
        let actual = this.head;
        if (this.size >0 ) {
           // console.log(this.size);
           // console.log(actual.next);
            this.head = actual.next;
           // console.log(this.size);
            this.size--;
        } else {
            this.head=null;
            console.log(`Nothing to delete`);
        }


    }
    deleteLast() {
        let actual = this.head;
        let past = null;

        if(this.size>0){
            while (actual.next) {
                past = actual;
                actual = actual.next;
                past.next = actual.next;
                this.size--;  
            }
    

        }else {
            this.head=null;
            console.log(`Nothing to delete in deleteLast`);
    }

   
    }

    printList() {
        let actual = this.head;
        let data = "";
        while (actual) {
            data += actual.element + " ";
            actual = actual.next;
        }
        console.log(data);
    }
}
/************************ */
const list = new List();
