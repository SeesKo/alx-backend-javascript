// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 18 when inputs are "SUM", 9.0, and 9.0', () => {
      assert.strictEqual(calculateNumber('SUM', 9.0, 9.0), 18);
    });

    it('should return 11 when inputs are "SUM", 9.5, and 0.6', () => {
      assert.strictEqual(calculateNumber('SUM', 9.5, 0.6), 11);
    });

    it('should return 0 when inputs are "SUM", 0.1, and -0.1', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, -0.1), 0);
    });

    it('should return -1 when inputs are "SUM", -1.2, and 0.1', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, 0.1), -1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are "SUBTRACT", 1.4, and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 when inputs are "SUBTRACT", 2.7, and 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 1.4), 2);
    });

    it('should return -3 when inputs are "SUBTRACT", -1.2, and 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, 1.5), -3);
    });

    it('should return 0 when inputs are "SUBTRACT", 0.5, and 0.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are "DIVIDE", 1.4, and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return 1 when inputs are "DIVIDE", 2.5, and 2.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1);
    });

    it('should return "Error" when inputs are "DIVIDE", 1.4, and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 0 when inputs are "DIVIDE", 0.4, and 1.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.4, 1.4), 0);
    });

    it('should return -4.5 when inputs are "DIVIDE", -9.0, and 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.0, 2.0), -4.5);
    });
  });

  describe('invalid Type', () => {
    it('should return 0 for invalid type', () => {
      assert.strictEqual(calculateNumber('INVALID', 1.4, 4.5), 0);
    });
  });
});
