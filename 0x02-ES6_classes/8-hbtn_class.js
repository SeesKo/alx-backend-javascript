export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Type casting
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
