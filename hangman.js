//// OCT 10 LAB Hangman Game - script.js
let words = ["singapore", "alexandria", "guadalajara", "philadelphia", "bangkok"]; // List of words to choose from
let word = words[Math.floor(Math.random() * words.length)]; // Select a random word from the list
let guessedWord = Array(word.length).fill("_"); // Display of guessed letters
let incorrectGuesses = 0; // Number of incorrect guesses
let maxIncorrectGuesses = 6; // Maximum allowed incorrect guesses
let hangmanFigures = [
    "  ____ \n |    | \n |     \n |     \n |     \n_|_", // Empty
    "  ____ \n |    | \n |    O \n |     \n |     \n_|_", // Head
    "  ____ \n |    | \n |    O \n |    | \n |     \n_|_", // Head and body
    "  ____ \n |    | \n |    O \n |   /| \n |     \n_|_", // Head, body, and one arm
    "  ____ \n |    | \n |    O \n |   /|\\ \n |     \n_|_", // Head, body, and both arms
    "  ____ \n |    | \n |    O \n |   /|\\ \n |   / \n_|_", // Almost hanged
    "  ____ \n |    | \n |    O \n |   /|\\ \n |   / \\ \n_|_" // Hanged
];
// Function to update the word display
function updateWordDisplay() {
    document.getElementById("wordDisplay").innerText = guessedWord.join(" ");
}
// Function to update the hangman figure
function updateHangmanFigure() {
    document.getElementById("hangmanDrawing").innerText = hangmanFigures[incorrectGuesses];
}
// Function to handle the letter guess
function guessLetter() {
    let letter = document.getElementById("letterInput").value.toLowerCase();
    if (letter.length !== 1 || !letter.match(/[a-z]/i)) {
        alert("Please enter a valid letter.");
        return;
    }
    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord[i] = letter;
            }
        }
    } else {
        incorrectGuesses++;
        document.getElementById("incorrectGuesses").innerText += " " + letter;
        updateHangmanFigure();
    }
    updateWordDisplay();
    if (guessedWord.join("") === word) {
        alert("Congratulations! You guessed the name of the city.");
    } else if (incorrectGuesses === maxIncorrectGuesses) {
        alert("Sorry, you've reached the maximum number of incorrect guesses. The city was: " + word);
    }
    document.getElementById("letterInput").value = "";
}
// Initialize the display
updateWordDisplay();
updateHangmanFigure();
// Add event listener for the submit button
document.getElementById("submitBtn").addEventListener("click", guessLetter);














