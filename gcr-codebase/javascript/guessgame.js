
 // Generate a random number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess (change this value to test the game)
const userGuess = 25;

// Compare the guess with the secret number
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 numbers
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
console.log(`Secret Number: ${secretNumber}`);
