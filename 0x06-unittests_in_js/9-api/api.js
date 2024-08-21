const express = require('express');
const app = express();
const port = 7865;

// Existing route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route with regex validation for ID
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  // Regex to match only numeric values
  if (/^\d+$/.test(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// Start server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
