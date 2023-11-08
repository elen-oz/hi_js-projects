//* ------ Model ------- //
const words1 = [
  'leg',
  'foot',
  'arm',
  'hand',
  'toe',
  'finger',
  'head',
  'nose',
  'tongue',
];
let selectedWord1 = words1[Math.floor(Math.random() * words1.length)];
const correctLetters1: string[] = [];
const wrongLetters1: string[] = [];
let attemptsCount1 = 0;
let gameOver1 = false;
const maxWrongAttempts1 = selectedWord1.length;

//* ------ View ------- //
const wordEl1 = document.querySelector('#word') as HTMLElement;

const wrongLettersEl1 = document.querySelector('#wrong-letters') as HTMLElement;
const messageEl1 = document.querySelector('#message') as HTMLElement;

//* ------ Controller ------ //
const displayWord1 = () => {
  if (wordEl1) {
    wordEl1.innerHTML = `
      ${selectedWord1
        .split('')
        .map(
          (letter) => `
            <span class="letter">
              ${correctLetters1.includes(letter) ? letter.toUpperCase() : ''}
            </span>
          `
        )
        .join('')}
    `;
  }

  let innerWord1: string = '';

  if (wordEl1) {
    innerWord1 = wordEl1.innerText.split('\n').join('');
  }

  if (messageEl1) {
    if (innerWord1.toUpperCase() === selectedWord1.toUpperCase()) {
      messageEl1.innerText = 'You won! 😈';
      messageEl1.classList.add('win-color');
      gameOver1 = true;
    }
  }
};

const updateWrongLettersEl1 = () => {
  if (wrongLettersEl1) {
    wrongLettersEl1.innerHTML = `
      ${wrongLetters1.length > 0 ? '<p> Wrong Letters:</p>' : ''}
      ${wrongLetters1.map((letter) => `<span>${letter.toUpperCase()}</span>`)}
    `;
  }
};

//* ------ Game starts here ----- //

window.addEventListener('keydown', (e) => {
  if (messageEl1) {
    if (attemptsCount1 === maxWrongAttempts1) {
      messageEl1.innerText = 'You lost 🤡';
      messageEl1.classList.add('lose-color');
      gameOver1 = true;
    }
  }

  if (!gameOver1) {
    const letter1 = e.key;

    if (/^[a-zA-Z]$/.test(letter1)) {
      if (selectedWord1.includes(letter1)) {
        if (!correctLetters1.includes(letter1)) {
          correctLetters1.push(letter1);

          displayWord1();
        } else {
          if (messageEl1) {
            messageEl1.innerText = `${letter1.toUpperCase()} - was already!`;
            messageEl1.classList.add('info-color');

            setTimeout(() => {
              messageEl1.innerText = '';
              messageEl1.classList.remove('info-color');
            }, 2000);
          }
        }
      } else {
        if (!wrongLetters1.includes(letter1)) {
          wrongLetters1.push(letter1);
          attemptsCount1 += 1;
          updateWrongLettersEl1();
        } else {
          if (messageEl1) {
            messageEl1.innerText = `${letter1.toUpperCase()} - was already!`;
            messageEl1.classList.add('info-color');

            setTimeout(() => {
              messageEl1.innerText = '';
              messageEl1.classList.remove('info-color');
            }, 2000);
          }
        }
      }
    } else {
      if (messageEl1) {
        messageEl1.innerText = `${letter1.toUpperCase()} - is not a letter!`;
        messageEl1.classList.add('info-color');

        setTimeout(() => {
          messageEl1.innerText = '';
          messageEl1.classList.remove('info-color');
        }, 2000);
      }
    }
  }
});

displayWord1();
