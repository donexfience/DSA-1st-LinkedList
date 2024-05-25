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
  print() {
    if (this.isEmpty()) {
      return "empty";
    } else {
      let current = this.head;
      let listNodes = "";
      while (current) {
        listNodes += `${current.value}->`;
        current = current.next;
      }
      listNodes += "null";
      console.log(listNodes);
    }
  }
  Reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(30);
list.prepend(40);
list.print();
list.Reverse();
list.print();
