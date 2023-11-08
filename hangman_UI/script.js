'use strict';

//* ------ Model ------- //
const words = ['leg', 'foot', 'arm', 'hand', 'toe', 'finger'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];
let attemptsCount = 0;
let gameOver = false;
const maxWrongAttempts = selectedWord.length;

//* ------ View ------- //
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const messageEl = document.getElementById('message');

//* ------ Controller ------ //
const displayWord = () => {
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

  const innerWord = wordEl.innerText.split('\n').join('');

  if (innerWord.toUpperCase() === selectedWord.toUpperCase()) {
    messageEl.innerText = 'You won! 😈';
    messageEl.classList.add('win-color');
    gameOver = true;
  }
};

const updateWrongLettersEl = () => {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p> Wrong Letters:</p>' : ''}
    ${wrongLetters.map((letter) => `<span>${letter.toUpperCase()}</span>`)}
  `;
};
//* ------ Game starts here ----- //

window.addEventListener('keydown', (e) => {
  if (attemptsCount === maxWrongAttempts) {
    messageEl.innerText = 'You lost 🤡';
    messageEl.classList.add('lose-color');
    gameOver = true;
  }
  if (!gameOver) {
    // if (attemptsCount <= maxWrongAttempts) {
    const letter = e.key;

    if (/^[a-zA-Z]$/.test(letter)) {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);

          displayWord();
        } else {
          messageEl.innerText = `${letter.toUpperCase()} - was already!`;
          messageEl.classList.add('info-color');

          setTimeout(() => {
            messageEl.innerText = '';
            messageEl.classList.remove('info-color');
          }, 2000);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);
          attemptsCount += 1;
          updateWrongLettersEl();
        } else {
          messageEl.innerText = `${letter.toUpperCase()} - was already!`;
          messageEl.classList.add('info-color');

          setTimeout(() => {
            messageEl.innerText = '';
            messageEl.classList.remove('info-color');
          }, 2000);
        }
      }
    } else {
      messageEl.innerText = `${letter.toUpperCase()} - is not a letter!`;
      messageEl.classList.add('info-color');

      setTimeout(() => {
        messageEl.innerText = '';
        messageEl.classList.remove('info-color');
      }, 2000);
    }
  }
  // else {
  //   messageEl.innerText = 'You lost 😈';
  //   messageEl.classList.add('lose-color');
  // }
  // }
});

displayWord();
