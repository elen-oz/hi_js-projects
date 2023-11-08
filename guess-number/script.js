'use strict';

let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

let guesses = 5;

let guess = Number(prompt(`Guess a number between 1-100\n${guesses} left`));

let messageEl = document.querySelector('#message');

if (number === guess) {
  messageEl.innerHTML = 'You won';
  messageEl.classList.add('message--correct');
} else if (number < guess) {
  messageEl.innerHTML = 'Lower';
  messageEl.classList.add('message--incorrect');
} else if (number > guess) {
  messageEl.innerHTML = 'Higher';
  messageEl.classList.add('message--incorrect');
}
