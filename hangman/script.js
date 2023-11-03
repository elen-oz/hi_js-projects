var words = ['leg'];
// 'leg', 'foot', 'arm', 'hand', 'toe', 'finger'
var word = words[Math.floor(Math.random() * words.length)];
var guessedWord = '';
for (var i = 0; i < word.length; i += 1) {
    guessedWord += '*';
}
var attempts = word.length;
var round = 0;
var correctGuesses = 0;
var textGreeting = 'Let the game begin!';
alert(textGreeting.toLocaleUpperCase());
var textDescription = 'Your mission is to guess which body part you are gonna lose.';
alert(textDescription);
while (attempts > 0) {
    round += 1;
    if (round === 1) {
        alert("\nTotal number of letters: ".concat(guessedWord.length));
    }
    else {
        alert("\nLet's keep playing!\nTotal number of letters: ".concat(guessedWord.length, "\nYou already guessed: ").concat(correctGuesses, "\nAnd ").concat(attempts, " attempts left"));
    }
    var guess = prompt('Enter a letter:');
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
    var isLetterInWord = false;
    for (var i = 0; i < word.length; i += 1) {
        if (word[i] === guess) {
            isLetterInWord = true;
            correctGuesses += 1;
        }
    }
    if (!isLetterInWord) {
        attempts -= 1;
        alert('Wrong! You have  ' + attempts + ' attempts left.');
    }
    else if (correctGuesses !== word.length) {
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
