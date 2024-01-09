// dice-roller.js

// Roll dice and return result
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Program
function program() {
  // Get the input

  const args = process.argv.slice(2);
  const diceRoll = parseInt(args[0]);

  // Verify if valid
  if (isNaN(diceRoll) || diceRoll <= 0) {
      console.log("Please provide a valid positive number as a command-line argument.");
      return;
  }

  // Roll and display result
  const result = [];
  for (let i = 0; i < diceRoll; i++) {
      result.push(rollDie());
  }

  console.log(`Rolled ${diceRoll} dice: ${result.join(', ')}`);
}

// Run
program();