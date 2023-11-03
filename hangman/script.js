'use strict';
const words = ['leg'];
// 'leg', 'foot', 'arm', 'hand', 'toe', 'finger'
let word = words[Math.floor(Math.random() * words.length)];

let guessedWord = '';
for (let i = 0; i < word.length; i += 1) {
  guessedWord += '*';
}

let attempts = word.length;
let round = 0;
let correctGuesses = 0;

let textGreeting = 'Let the game begin!';
alert(textGreeting.toLocaleUpperCase());

let textDescription =
  'Your mission is to guess which body part you are gonna lose.';
alert(textDescription);

while (attempts > 0) {
  round += 1;
  if (round === 1) {
    alert(`\nTotal number of letters: ${guessedWord.length}`);
  } else {
    alert(
      `\nLet's keep playing!\nTotal number of letters: ${guessedWord.length}\nYou already guessed: ${correctGuesses}\nAnd ${attempts} attempts left`
    );
  }

  let guess = prompt('Enter a letter:');

  // https://chisellabs.com/glossary/what-is-an-edge-case/#:~:text=handle%20unexpected%20scenarios.-,What%20Is%20an%20Edge%20Case%20in%20Programming%3F,ensure%20the%20program%20behaves%20correctly.
  // ---- Edge cases -----
  if (!guess) {
    alert('You canceled the game.');
    break;
  }

  if (guess.length !== 1) {
    alert("Please, I'm asking nicely for now, enter only one letter.");
    continue;
  }
  // ---- Edge cases -----

  let isLetterInWord = false;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === guess) {
      isLetterInWord = true;
      correctGuesses += 1;
    }
  }

  if (!isLetterInWord) {
    attempts -= 1;
    alert('Wrong! You have  ' + attempts + ' attempts left.');
  } else if (correctGuesses !== word.length) {
    alert('Looks right so far....');
  }

  if (correctGuesses === word.length) {
    alert('Congratulations! You guessed the word: ' + word);
    break;
  }
}

if (attempts === 0) {
  alert('Game over. That was the right word: ' + word);
}
