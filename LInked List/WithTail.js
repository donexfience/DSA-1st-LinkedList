class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  reomveByvalue(value) {
    let removeNode;
    if (this.head.value === value) {
      removeNode = this.head.value;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode;
  }
  removeByIndex(index) {
    let removeNode;
    if (index < 1 || index > this.size) {
      return null;
    }
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removeNode = current.next;
      current.next = removeNode.next;
    }
    this.size--;
  }
  removeEndWithTail() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  print() {
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
const list = new Linkedlist();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.reomveByvalue(50);
list.removeByIndex(1);
list.removeEndWithTail();
list.print();
