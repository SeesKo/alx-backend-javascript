// Creation of small HTTP server using Express module
const express = require('express');
// Create an instance of an Express application
const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://127.0.0.1:1245');
});

// Export the app for testing or further use
module.exports = app;
