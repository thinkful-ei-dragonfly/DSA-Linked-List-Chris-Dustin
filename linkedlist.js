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


function display(list) {
  let currNode = list.head
  while (currNode !== null) {
    console.log(currNode.value)
    currNode = currNode.next
  }
}

function size(list) {
  let currNode = list.head
  let counter = 0
  while (currNode !== null) {
    counter += 1;
    currNode = currNode.next
  }
  return counter
}

function isEmpty(list) {
  if (list.head === null) {
    return true;
  }
  else {
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
      return prevNode.value
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



function main() {
  const SLL = new LinkedList();
  const emptyList = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.removeItem('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt(3, 'Kat');
  SLL.removeItem('Tauhida');
  display(SLL)
  console.log(size(SLL))

  console.log(isEmpty(emptyList))
  console.log(findPrevious(SLL, 'Husker'))
  console.log(findLast(SLL))
}

main();
