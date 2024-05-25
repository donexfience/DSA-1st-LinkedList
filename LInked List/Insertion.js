class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let prev = this.head;
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
      this.size++;
    }
  
    print() {
      let current = this.head;
      let listNodes = "";
      if (this.isEmpty()) {
        console.log("empty");
      } else {
        while (current) {
          listNodes += `${current.value} -> `;
          current = current.next;
        }
        listNodes += "null";
        console.log(listNodes);
      }
    }
  
    insertion(target, value) {
      if (target < 0 || target > this.size) {
        return;
      }
      if (target === 0) {
        this.prepend(value);
      } else {
        let node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < target - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
  }
  
  const list = new LinkedList();
  list.prepend(10);
  list.prepend(20);
  list.prepend(30);
  list.prepend(40);
  list.print(); // Output: 40 -> 30 -> 20 -> 10 -> null
  list.insertion(3, 60); // Insertion at index 4
  list.print(); // Output: 40 -> 30 -> 20 -> 10 -> 60 -> null
  