'use strict';

let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

let guesses = 5;

while (true) {
  let guess = Number(prompt(`Guess a number between 1-100\n${guesses} left`));

  if (number === guess) {
    alert('You won');
    break;
  } else if (number < guess) {
    alert('Lower');
  } else if (number > guess) {
    alert('Higher');
  }

  guesses -= 1;

  if (guesses <= 0) {
    alert('you lost');
    break;
  }
}
