const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct response when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        try {
          expect(response).to.deep.equal({ data: 'Successful response from the API' });
          done();
        } catch (error) {
          done(error);
        }
      })
      .catch(done);
  }));

  it('should not return a response when success is false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        try {
          expect(response).to.be.undefined;
          done();
        } catch (error) {
          done(error);
        }
      })
      .catch(done);
  }));
});
