const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for their name
console.log("Welcome to Holberton School, what is your name?");

// Read user input
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close the program
  console.log("This important software is now closing");
  rl.close();
});
