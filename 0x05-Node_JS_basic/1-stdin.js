// Using Process STDIN
// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle readable event to process user input
process.stdin.on('readable', () => {
  const input = process.stdin.read(); // Read from the input buffer

  // Check if there is any input
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

// Handle end of input stream
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
