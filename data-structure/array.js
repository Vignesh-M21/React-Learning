class NewArray {
  constructor() {
    this.length = 0;
    this.data = {};

    return new Proxy(this, {
      get(target, prop) {
        if (prop in target) {
          return target[prop];
        }
        if (typeof prop === "string") {
          return target.data[prop];
        }
      },
      // work on set method with set(target, prop, value)
    });
  }

  /**
   * Add new item in the last position
   *
   * @param {any} item
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;
    const value = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return value;
  }

  /**
   * @param {number} index
   */
  delete(index) {
    if (!(index in this.data)) return false;

    this.shiftItems(index);
    return true;
  }

  /**
   * @param {number} index
   */
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new NewArray();

arr.push(2);
arr.push(3);
arr.push(6);

console.log(arr[1]);
