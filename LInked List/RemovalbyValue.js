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
  Removelist(index) {
    if (index > this.size || index < 1) {
      return;
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
      this.size--;
    }
  }
  insert(index, value) {
    if (index > this.size || index < 1) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeByValue(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let removeNode;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
  }
  SearchByvalue(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let i = 0;
      current = this.head;
      while (current) {
        if (current.value === value) {
          return i;
        }
        current = current.next;
        i++;
      }
      return i;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let current = this.head;
      let listNodes = "";
      while (current) {
        listNodes += `${current.value} -> `;
        current = current.next;
      }
      listNodes += "null"; // To denote the end of the list
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

list.append(60);
list.print();
list.insert(6, 70);
list.print();
list.Removelist(2);
list.print();
list.removeByValue(70);
list.print();
list.SearchByvalue(20);
