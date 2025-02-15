class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(...objectArr) {
        objectArr = this.removeIncorrectObjectsInsert(objectArr);

        if (objectArr !== []) {
            if (this.head === null && objectArr.length === 1) {
                this.head = new LinkedListNode(objectArr[0]);
                this.length++;
            } else if (this.head === null && objectArr.length > 1) {
                this.head = new LinkedListNode(objectArr[0]);
                this.length++;
                for (let i = 1; i < objectArr.length; i++) {
                    this.traverseListInsert(objectArr[i]);
                }
            } else if (this.head !== null && objectArr.length === 1) {
                this.traverseListInsert(objectArr[0]);
            } else if (this.head !== null && objectArr.length > 1) {
                for (let i = 0; i < objectArr.length; i++) {
                    this.traverseListInsert(objectArr[i]);
                }
            }
        } else {
            console.log('The list is empty');
        }
    }

    remove(key) {
        if (this.length !== 0) {
            let previous = null;
            let current = this.head;
            let check = false;
            for (let i = 0; i < this.length; i++) {
                if (key === current.data.key) {
                    if (previous === null) {
                        this.head = this.head.getNext();
                        current.setNext(null);
                    } else if (i !== this.length - 1) {
                        previous.setNext(current.getNext());
                        current.setNext(null);
                    } else if (i === this.length - 1) {
                        previous.setNext(null);
                    }
                    this.length--;
                    check = true;
                    break;
                } else if (previous === null) {
                    previous = this.head;
                    current = current.getNext();
                } else if (previous !== null) {
                    previous = previous.getNext();
                    current = current.getNext();
                }
            }
            if (!check) {
                console.log(`${key} is not in this list`)
            }
        } else {
            console.log('The list is empty. There is nothing to remove');
        }
    }

    contains(key) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (key === current.data.key) {
                return true;
            }

            current = current.getNext();
        }

        return false;
    }

    size() {
        return this.length;
    }

    toString() {
        let current = this.head;
        let keysArr = [];
        for (let i = 0; i < this.length; i++) {
            keysArr.push(current.data.key);
            current = current.getNext();
        }

        return keysArr.join(',');
    }

    traverseListInsert(objectArrNode) {
        let previous = null;
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (objectArrNode.key === current.data.key) {
                console.log('There is already a key with that value in the list');
                break;
            } else if (objectArrNode.key < current.data.key && previous === null) {
                this.head = new LinkedListNode(objectArrNode);
                this.head.setNext(current);
                this.length++;
                break;
            } else if (objectArrNode.key < current.data.key && previous !== null) {
                let newNode = new LinkedListNode(objectArrNode);
                previous.setNext(newNode);
                newNode.setNext(current);
                this.length++;
                break;
            } else if (objectArrNode.key > current.data.key && i === this.length - 1) {
                current.setNext(new LinkedListNode(objectArrNode));
                this.length++;
                break;
            } else if (objectArrNode.key > current.data.key && previous === null) {
                previous = this.head;
                current = current.getNext();
            } else if (objectArrNode.key > current.data.key && previous !== null) {
                previous = previous.getNext();
                current = current.getNext();
            }
        }
    }

    removeIncorrectObjectsInsert(objectArr) {
        let tempLength = objectArr.length;
        let tempArr = [];
        for (let i = 0; i < tempLength; i++) {
            if (Object.keys(objectArr[i]).length === 1 && Object.keys(objectArr[i])[0] === 'key') {
                tempArr.push(objectArr[i]);
            } else {
                console.log(`${JSON.stringify(objectArr[i])} is not a correct object`);
            }
        }

        return tempArr;
    }
}

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }

    getNext() {
        return this.nextNode;
    }

    setNext(nextNode) {
        this.nextNode = nextNode;
    }
}