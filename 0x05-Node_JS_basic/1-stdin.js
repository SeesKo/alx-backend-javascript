// Using Process STDIN
// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle data event to process user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert input to string and trim whitespace
  process.stdout.write(`Your name is: ${name}\n`);
});

// Handle end of input stream
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
