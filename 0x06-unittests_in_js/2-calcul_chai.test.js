const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 18 when inputs are "SUM", 9.0, and 9.0', () => {
      expect(calculateNumber('SUM', 9.0, 9.0)).to.equal(18);
    });

    it('should return 11 when inputs are "SUM", 9.5, and 0.6', () => {
      expect(calculateNumber('SUM', 9.5, 0.6)).to.equal(11);
    });

    it('should return 0 when inputs are "SUM", 0.1, and -0.1', () => {
      expect(calculateNumber('SUM', 0.1, -0.1)).to.equal(0);
    });

    it('should return -1 when inputs are "SUM", -1.2, and 0.1', () => {
      expect(calculateNumber('SUM', -1.2, 0.1)).to.equal(-1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are "SUBTRACT", 1.4, and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 2 when inputs are "SUBTRACT", 2.7, and 1.4', () => {
      expect(calculateNumber('SUBTRACT', 2.7, 1.4)).to.equal(2);
    });

    it('should return -3 when inputs are "SUBTRACT", -1.2, and 1.5', () => {
      expect(calculateNumber('SUBTRACT', -1.2, 1.5)).to.equal(-3);
    });

    it('should return 0 when inputs are "SUBTRACT", 0.5, and 0.5', () => {
      expect(calculateNumber('SUBTRACT', 0.5, 0.5)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are "DIVIDE", 1.4, and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 1e-10);
    });

    it('should return 1 when inputs are "DIVIDE", 2.5, and 2.5', () => {
      expect(calculateNumber('DIVIDE', 2.5, 2.5)).to.equal(1);
    });

    it('should return "Error" when inputs are "DIVIDE", 1.4, and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 0 when inputs are "DIVIDE", 0.4, and 1.4', () => {
      expect(calculateNumber('DIVIDE', 0.4, 1.4)).to.equal(0);
    });

    it('should return -4.5 when inputs are "DIVIDE", -9.0, and 2.0', () => {
      expect(calculateNumber('DIVIDE', -9.0, 2.0)).to.equal(-4.5);
    });
  });

  describe('invalid Type', () => {
    it('should return 0 for invalid type', () => {
      expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal(0);
    });
  });
});
