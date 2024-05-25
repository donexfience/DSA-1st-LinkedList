class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Linkedlist {
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
    let listofNodes = "";
    let current = this.head;
    if (this.isEmpty()) {
      console.log("empty");
    } else {
      while (current.next) {
        listofNodes += `${current.value} ->`;
        current = current.next;
      }
      listofNodes += "null";
    }
    console.log(listofNodes);
  }
  insert(target, value) {
    const node = new Node(value);
    if (target < 0 || target > this.size) {
      return;
    }
    if (target === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < target - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeNode(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removeNode;
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
    return removeNode.value;
  }
}

let list = new Linkedlist();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.insert(1, 40);
list.removeNode(1);
list.print();
