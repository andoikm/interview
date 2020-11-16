function LinkedList() {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype = {
  node: function (element) {
    this.element = element;
    this.next = null;
  },
  size: function () {
    return this.length;
  },
  getHead: function () {
    return this.head;
  },
  add: function (element) {
    const node = new this.node(element);

    if (this.head === null){
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next)
        currentNode = currentNode.next;

      currentNode.next = node;
      this.length++;
    }
  },
  remove: function (element) {
    let currentNode = this.head;
    let previousNode;

    if (currentNode.element === element){
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode;
      this.length--;
    }
  },
  isEmpty: function (){
    return this.length === 0;
  },
  indexOf: function (element) {
    let currentNode = this.head;
    let index = -1;
    while (currentNode) {
      index++;

      if (currentNode.element === element)
        return index;

      currentNode = currentNode.next;
    }

    return -1;
  },
  elementAt: function (index) {
    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  },
  addAt: function (index, element){
    if (index > this.length)
      return false;

    const node = this.node(element);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      while (currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    this.length++;
  },
  removeAt: function (index) {
    if (index < 0 || index > this.length)
      return null;

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index === 0){
      this.head = currentNode.next;
    } else {
      while (currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
        previousNode.next = currentNode.next;
      }
    }

    this.length--;
    return currentNode.element;
  }
}

let conga = new LinkedList();

conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');

console.log(conga.size());
console.log(conga.elementAt(1));
console.log(conga.indexOf('Dog'));
console.log(conga.removeAt(2));
console.log(conga.size());
