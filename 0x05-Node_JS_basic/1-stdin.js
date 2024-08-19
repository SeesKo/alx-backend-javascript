// 1-stdin.js

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Capture user input from stdin
process.stdin.on('data', (data) => {
  const input = data.toString().trim();  // Convert the input buffer to a string and trim any whitespace
  console.log(`Your name is: ${input}`);  // Display the user's name

  // Close the stdin stream and exit the program
  process.stdin.end();
});

// When the stdin stream ends, display the closing message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
