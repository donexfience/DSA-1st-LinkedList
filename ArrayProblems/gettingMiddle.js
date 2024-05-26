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
    let current = this.head;
    let listNodes = "";
    while (current) {
      listNodes += `${current.value}->`;
      current = current.next;
    }
    listNodes += "null";
    console.log(listNodes);
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
  getMiddle() {
    if (!this.head) {
      return null;
    }
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  insertBeforeMiddle(value) {
    const node = new Node(value);
    if (!this.head || !this.head.next) {
      console.log("List is empty or has only one node.");
      return;
    }
    let prev = null;
    let middleNode = this.getMiddle();
    let current = this.head;
    while (current != middleNode) {
      prev = current;
      current = current.next;
    }
    prev.next = node;
    node.next = current;
    this.size++;
  }
  inserAfterMiddle(value) {
    let middle = this.getMiddle();
    const node = new Node(value);
    node.next = middle.next;
    middle.next = node;
    this.size++;
  }
  insertBeforeMIddle2(value) {
    const node = new Node(value);
    let prev = null;
    let current = this.head;
    let middle = this.getMiddle();
    while (current != middle) {
      prev = current;
      current = current.next;
    }
    prev.next = node;
    node.next = current;
    this.size++;
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.insertBeforeMiddle(100);
list.print();
const middleNode = list.getMiddle();
console.log(middleNode);
