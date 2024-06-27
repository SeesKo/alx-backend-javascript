export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Proxy method that calls the abstract method
  callEvacuationWarningMessage() {
    // Ensure `this` context is used
    this.evacuationWarningMessageProxy();
  }

  // Abstract method: to be overridden by subclasses
  evacuationWarningMessageProxy() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
