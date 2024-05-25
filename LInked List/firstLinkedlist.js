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
      // Corrected here
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
    }
    else{
        
    }
  }
  // print() {
  //   if (this.isEmpty()) {
  //     console.log("list is empty");
  //   } else {
  //     let current = this.head;
  //     let listNodes = "";
  //     while (current) {
  //       listNodes += `${current.value} -> `;
  //       current = current.next;
  //     }
  //     listNodes += "null"; // To denote the end of the list
  //     console.log(listNodes);
  //   }
  // }
  print() {
    let current = this.head;
    let listNodes = "";
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      while (current) {
        listNodes += `${current.value} ->`;
        current = current.next;
      }
      listNodes += "null";
      console.log(listNodes);
    }
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);

list.print();
