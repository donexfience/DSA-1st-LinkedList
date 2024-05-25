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
    let listnodes = "";
    if (this.isEmpty()) {
      console.log("node is empty");
    }
    while (current) {
      listnodes += `${current.value} ->`;
      current = current.next;
    }
    listnodes += "null";
    console.log(listnodes);
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
