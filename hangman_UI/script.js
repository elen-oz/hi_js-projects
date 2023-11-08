'use strict';

//* ------ Model ------- //
const words = ['leg', 'foot', 'arm', 'hand', 'toe', 'finger'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];
const maxWrongAttempts = 6;

//* ------ View ------- //
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const messageEl = document.getElementById('message');
const figureParts = document.querySelectorAll('.figure-part');

//* ------ Controller ------ //
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        (letter) => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter.toUpperCase() : ''}
          </span>
        `
      )
      .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord.toUpperCase() === selectedWord.toUpperCase()) {
    messageEl.innerText = 'You won! 😈 \nJust for now....';
  }
}

function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p> Wrong Letters:</p>' : ''}
    ${wrongLetters.map((letter) => `<span>${letter.toUpperCase()}</span>`)}
  `;
  if (wrongLetters.length >= maxWrongAttempts) {
    messageEl.innerText = 'You lost 😈';
  }
}

window.addEventListener('keydown', (e) => {
  // messageEl.classList.remove('info-color');
  // messageEl.innerText = ``;

  const letter = e.key;
  if (/^[a-zA-Z]$/.test(e.key)) {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        alert('There is some kind of error...');
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        // messageEl.classList.add('info-color');
        messageEl.innerText = `${letter} - was already!`;
      }
    }
  } else {
    messageEl.innerText = `${letter} - is not a letter!`;
  }
});

displayWord();
