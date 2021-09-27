//Global Variables to select elements
const guessedLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

//Global Variety Starting word to test out the game
const word = "magnolia";

//Function to Add Placeholders for Each Letter

const updateParagraph = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};
updateParagraph(word);

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = guessInput.value;
  console.log(guess);
  letterInput.value = "";
});
