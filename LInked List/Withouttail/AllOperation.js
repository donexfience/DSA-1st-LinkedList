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
  insert(index, value) {
    const node = new Node(value);
    if (index < 1 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
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
  RemoveByValue(value) {
    let removeNode;
    if (this.head.value === value) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next) {
        removeNode = current.next;
        current.next = removeNode.next;
      }
    }
    this.size--;
    return removeNode;
  }
  RemoveByIndex(index) {
    let removeNode;
    if (index < 1 || index > this.size) {
      return;
    }
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
  }
  SearchByValue(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let index = 0;
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.insert(4, 5);

list.print();
list.Reverse();
list.print();
list.RemoveByValue(20);
list.print();
list.RemoveByIndex(2);
list.print();
list.SearchByValue(10);
