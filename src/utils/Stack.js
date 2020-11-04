export default class Stack {
  constructor(){
    this._count = 0;
    this._storage = {};
  }

  push(value) {
    this._storage[this._count] = value;
    this._count++;
  }

  pop() {
    if (this._count === 0) {
      return undefined;
    }

    this._count--;
    let result = this._storage[this._count];
    delete this._storage[this._count];
    return result;
  }

  get size(){
    return this._count;
  }
}