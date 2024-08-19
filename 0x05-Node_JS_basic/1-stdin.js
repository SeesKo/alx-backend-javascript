// Using Process STDIN
// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle readable event to process user input
process.stdin.on('readable', () => {
  const input = process.stdin.read(); // Read from the input buffer

  if (input !== null) { // Check if there is any input
    const name = input.toString().trim(); // Convert input to string and trim whitespace
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

// Handle end of input stream
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
