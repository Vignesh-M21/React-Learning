export class NewArray {
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
      set(target, prop, value) {
        if (!(prop in target)) {
          this._insertItem(prop, value, target);
          return true;
        }
        target[prop] = value;
        return true;
      },

      _insertItem(position, item, target) {
        if (position in target.data) {
          target.data[position] = item;
          return true;
        }
        for (let index = target.length; index <= position; index++) {
          target.data[index] = index == position ? item : undefined;
        }
        target.length = position + 1;
        return true;
      },
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

  valueOf() {
    return this.length;
  }
}

const arr = new NewArray();

arr.push(2);
arr.push(3);
arr.push(6);

arr[8] = 1;
const arr2 = new NewArray();
arr2.push(2);
arr2.push(3);
arr2.push(6);

console.log(arr + arr2);
