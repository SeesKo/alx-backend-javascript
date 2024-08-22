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

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return status code 200 when :id is a number', (done) => {
    request.get(`${baseUrl}/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments', () => {
  const baseUrl = 'http://localhost:7865/available_payments';

  it('should return status code 200', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods object', (done) => {
    request.get(baseUrl, (err, res, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login', () => {
  const baseUrl = 'http://localhost:7865/login';

  it('should return status code 200', (done) => {
    request.post({
      url: baseUrl,
      body: JSON.stringify({ userName: 'Betty' }),
      headers: { 'Content-Type': 'application/json' }
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct welcome message', (done) => {
    request.post({
      url: baseUrl,
      body: JSON.stringify({ userName: 'Betty' }),
      headers: { 'Content-Type': 'application/json' }
    }, (err, res, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
