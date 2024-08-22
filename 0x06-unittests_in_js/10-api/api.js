const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

// Existing route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with regex validation for ID
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (/^\d+$/.test(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// New endpoint /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New endpoint /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
