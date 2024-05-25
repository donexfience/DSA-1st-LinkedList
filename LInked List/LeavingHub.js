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
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
  
    SearchByvalue(value) {
      if (this.isEmpty()) {
        return -1;
      } else {
        let i = 0;
        let current = this.head;
        while (current) {
          if (current.value === value) {
            return i;
          }
          current = current.next;
          i++;
        }
        return -1; // Return -1 if the value is not found
      }
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("list is empty");
      } else {
        let current = this.head;
        let listofNodes = "";
        while (current) {
          listofNodes += `${current.value}->`;
          current = current.next;
        }
        listofNodes += "null";
        console.log(listofNodes);
      }
    }
  }
  
  const list = new LinkedList();
  
  list.append(5);
  list.prepend(10);
  list.prepend(20);
  list.prepend(30);
  list.prepend(40);
  list.prepend(50);
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  
  list.print();
  
  console.log(list.SearchByvalue(20)); // Should return the index of the first occurrence of 20
  console.log(list.SearchByvalue(100)); // Should return -1 as 100 is not in the list
  