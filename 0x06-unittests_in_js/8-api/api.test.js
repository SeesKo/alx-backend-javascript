const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
