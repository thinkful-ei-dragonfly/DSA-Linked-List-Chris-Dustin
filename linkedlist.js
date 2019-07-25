class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertLastCycle(item, node) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, node);
      console.log('a string');
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  removeItem(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
    return;
  }

  insertBefore(item, nodeKey) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.insertFirst(item);
      return;
    }

    let newNode = new _Node(item, null);

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;

      if (currNode === null) {
        console.log('Item not found');
        return;
      }

      if (currNode.value === nodeKey) {
        prevNode.next = newNode;
        newNode.next = currNode;
        return;
      }
    }
  }
  insertAfter(item, nodeKey) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.insertFirst(item);
      return;
    }

    let newNode = new _Node(item, null);

    let currNode = this.head;

    while (currNode !== null) {
      currNode = currNode.next;

      if (currNode === null) {
        console.log('Item not found');
        return;
      }

      if (currNode.value === nodeKey) {
        newNode.next = currNode.next;
        currNode.next = newNode;
        return;
      }
    }
  }

  insertAt(pos, item) {
    let currNode = this.head;
    for (let i = 0; i < pos; i++) {
      currNode = currNode.next;
    }
    this.insertBefore(item, currNode.value);
  }
}

class _DNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    if(this.head===null){
      this.head = new _DNode(item, this.head, null);
      this.tail = this.head;
      return;
    }
    let newNode = new _DNode(item, this.head, null);
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let newNode = new _DNode(item, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  removeItem(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;
    return;
  }

  insertBefore(item, nodeKey) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.insertFirst(item);
      return;
    }

    let newNode = new _DNode(item, null, null);

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;

      if (currNode === null) {
        console.log('Item not found');
        return;
      }

      if (currNode.value === nodeKey) {
        prevNode.next = newNode;
        newNode.next = currNode;
        newNode.prev = prevNode;
        currNode.prev = newNode;
        return;
      }
    }
  }

  insertAfter(item, nodeKey) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.insertFirst(item);
      return;
    }

    let newNode = new _DNode(item, null, null);

    let currNode = this.head;

    while (currNode !== null) {
      currNode = currNode.next;

      if (currNode === null) {
        console.log('Item not found');
        return;
      }

      if (currNode.value === nodeKey) {
        newNode.next = currNode.next;
        newNode.prev = currNode;
        currNode.next.prev = newNode;
        currNode.next = newNode;
        return;
      }
    }
  }

  insertAt(pos, item) {
    let currNode = this.head;
    for (let i = 0; i < pos; i++) {
      currNode = currNode.next;
    }
    this.insertBefore(item, currNode.value);
  }
} //DLL end

function display(list) {
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    counter += 1;
    currNode = currNode.next;
  }
  return counter;
}

function isEmpty(list) {
  if (list.head === null) {
    return true;
  } else {
    return false;
  }
}

function findPrevious(list, item) {
  if (!list.head) {
    return null;
  }

  if (list.head.value === item) {
    list.insertFirst(item);
    return;
  }

  let newNode = new _Node(item, null);

  let currNode = list.head;
  let prevNode = list.head;

  while (currNode !== null) {
    prevNode = currNode;
    currNode = currNode.next;

    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    if (currNode.value === item) {
      return prevNode.value;
    }
  }
}

function findLast(list) {
  if (list.head === null) {
    return null;
  } else {
    let tempNode = list.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    return tempNode.value;
  }
}

function reverseList(list) {
  let twoBack = list.head;
  let prev = list.head;
  let current = list.head;

  while (current.next !== null) {
    if (current === twoBack) {
      current = current.next;
    }
    if (prev === twoBack && current !== twoBack) {
      current = current.next;
      prev = prev.next;
      twoBack.next = null;
    }
    prev.next = twoBack;
    twoBack = prev;
    prev = current;
    current = current.next;
  }
  prev.next = twoBack;
  current.next = prev;
  list.head = current;
  return list;
}

function thirdFromEnd(list) {
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    counter += 1;
    currNode = currNode.next;
  }

  let myNode = list.head;

  for (let i = 0; i < counter - 3; i++) {
    myNode = myNode.next;
  }
  return myNode;
}

function findMiddle(list) {
  var fastPointer = list.head;
  var slowPointer = list.head;

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  return slowPointer.value;
}

function cycleTest(list) {
  let listData = [];
  let current = list.head;
  let hasCycle = false;
  while (current !== null && !listData.includes(current.next)) {
    listData.push(current);
    current = current.next;
    if (current !== null && listData.includes(current.next)) {
      hasCycle = true;
    }
  }
  return hasCycle;
}

function main() {
  const SLL = new LinkedList();
  const emptyList = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.insertFirst('Coffee');
  SLL.removeItem('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt(3, 'Kat');
  SLL.removeItem('Tauhida');
  //SLL.insertLastCycle('Echo', SLL.find('Coffee'));
   display(SLL);
  // console.log(size(SLL))

  // console.log(isEmpty(emptyList))
  // console.log(findPrevious(SLL, 'Husker'))
  // console.log(findLast(SLL))
  // display(reverseList(SLL));
  // console.log(thirdFromEnd(SLL));
  // console.log(findMiddle(SLL))
  console.log(cycleTest(SLL));
}

//main();

function reverseDLL(list){
  if(list.head === null){
    console.log('no list');
    return;
  }

  let currNode = list.head;
  list.tail = currNode;

  while(currNode !== null){
    let temp = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = temp;
    if(currNode.prev){
      currNode = currNode.prev;
    } else{
      list.head = currNode;
      break;
    }
  }
  return list;
} //It's different because we have a prev value that we can use to make reassignment more straight-forward;

function mainDLL(){
  let DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertFirst('Caprica');
  DLL.insertFirst('Gemenon');
  DLL.insertFirst('Picon');
  DLL.insertFirst('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.removeItem('Picon');
  //display(DLL);
  display(reverseDLL(DLL));
  console.log(DLL);
}

mainDLL();
