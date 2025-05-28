import { NewArray } from "./array";

class Stack {
  /**
   * Initiate Array
   */
  constructor() {
    this.items = new NewArray();
  }

  pop() {
    return this.items.pop();
  }

  push(item) {
    this.items.push(item);
    return this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.data[this.length - 1];
  }

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.data);
  }
}

const StackObj = new Stack();
console.log(StackObj);

class StackWithLink {
  constructor() {
    this.top = null;
    this.va;
  }
}
