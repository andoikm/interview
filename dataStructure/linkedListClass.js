class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedListClass {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if(this.isEmpty()) {
      console.log("the list is empty");
    } else {
      let listValues = "";
      let curr = this.head;
      while(curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log("list is:", listValues);
    }
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head ?? null;
    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.warn(`the index is not valid (${index})`);
      return null;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for(let i=0; i < index-1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.warn(`the index is not valid (${index})`);
      return null;
    }
    let removedNode;
    if(index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for(let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let prev = this.head;
    let i = 0;
    while(prev) {
      if (prev.value === value) {
        return i;
      }
      prev = prev.next;
      i++
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while(curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}

const list = new linkedListClass();
// console.log("is list empty?: ", list.isEmpty());
// list.append(1);
// list.append(2);
// list.insert(3, 2);
// list.insert(4, 3);
// list.print();
// list.reverse();
// list.print();
