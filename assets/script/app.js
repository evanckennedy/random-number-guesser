'use strict';

// This app requires a server to handle import statements
// and CORS issues
import * as utils from './utils.js';


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Organizer                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const hintGenerator = utils.select('.hint-generator');
const guessInput = utils.select('.guess-input');
const guessesRemaining = utils.select('.guesses-remaining');

function generateRandomNumber() {
  return utils.randomNumber(1, 50);
}

let randomNumber = generateRandomNumber();

function handleGuess() {
  let inputValue = parseFloat(guessInput.value.trim());
  if (inputValue >= 1 && inputValue <= 50 && !isNaN(inputValue)) {
    if (inputValue === randomNumber) {
      hintGenerator.innerHTML = 'Well done! You guessed the right number!';
    } else if (inputValue > randomNumber) {
      hintGenerator.innerHTML = 'My number is lower.';
    } else {
      hintGenerator.innerHTML = 'My number is higher.'
    }
  }
  else {
    hintGenerator.innerHTML = 'Please enter a valid number between 1 and 50';
  }
}

utils.listen('keydown', guessInput, event => {
  if (event.key === 'Enter') {
    handleGuess();
    guessInput.value = '';
  }
});







