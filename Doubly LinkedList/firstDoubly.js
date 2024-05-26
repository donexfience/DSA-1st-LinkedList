class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    if (this.isEmpty()) {
      return null;
    }
    let currnet = this.head;
    let listOfNodes = "";
    while (currnet) {
      listOfNodes += `${currnet.value}->`;
      currnet = currnet.next;
    }
    listOfNodes += "null";
    console.log(listOfNodes);
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  insert(index, value) {
    if (index < 1 || index > this.size) {
      return "opertation not possible";
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      let current = current.next;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.prev = current;
      if (current.next) {
        current.next.prev = node;
      }
      node.next = current.next;
      current.next = node;
    }
  }
  removeIndex(index) {
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    }
  }
}
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();
