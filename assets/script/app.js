'use strict';

// This app requires a server to handle import statements
// and CORS issues
import * as utils from './utils.js';


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Selectors                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const hintGenerator = utils.select('.hint-generator');
const guessInput = utils.select('.guess-input');
const guessesRemaining = utils.select('.guesses-remaining');
const restartButton = utils.select('.restart-button');

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Play Game                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function generateRandomNumber() {
  return utils.randomNumber(1, 50);
}

let randomNumber = generateRandomNumber();
let guesses = 5;

function handleGuess() {
  let inputValue = parseFloat(guessInput.value.trim());
  if (inputValue >= 1 && inputValue <= 50 && !isNaN(inputValue)) {
    if (inputValue === randomNumber) {
      hintGenerator.innerHTML = 'Well done! You guessed the right number!';
    } else if (inputValue > randomNumber) {
      hintGenerator.innerHTML = 'My number is lower.';
      guesses--;
      guessesRemaining.innerHTML = guesses;
    } else {
      hintGenerator.innerHTML = 'My number is higher.';
      guesses--;
      guessesRemaining.innerHTML = guesses;
    }
  }
  else {
    hintGenerator.innerHTML = 'Please enter a valid number between 1 and 50';
  }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Restart Game                                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* function restartGame() {

} */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Event Listeners                                       */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

utils.listen('keydown', guessInput, event => {
  if (event.key === 'Enter') {
    handleGuess();
    guessInput.value = '';
  }
});







