//* ------ Model ------- //
var words = [
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
var selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);
var correctLetters = [];
var wrongLetters = [];
var attemptsCount = 0;
var gameOver = false;
var maxWrongAttempts = selectedWord.length;
//* ------ View ------- //
var wordEl = document.querySelector('#word');
var wrongLettersEl = document.querySelector('#wrong-letters');
var messageEl = document.querySelector('#message');
//* ------ Controller ------ //
var displayWord = function () {
    if (wordEl) {
        wordEl.innerHTML = "\n      ".concat(selectedWord
            .split('')
            .map(function (letter) { return "\n            <span class=\"letter\">\n              ".concat(correctLetters.includes(letter) ? letter.toUpperCase() : '', "\n            </span>\n          "); })
            .join(''), "\n    ");
    }
    var innerWord = '';
    if (wordEl) {
        innerWord = wordEl.innerText.split('\n').join('');
    }
    if (messageEl) {
        if (innerWord.toUpperCase() === selectedWord.toUpperCase()) {
            messageEl.innerText = 'You won! 😈';
            messageEl.classList.add('win-color');
            gameOver = true;
        }
    }
};
var updateWrongLettersEl = function () {
    if (wrongLettersEl) {
        wrongLettersEl.innerHTML = "\n      ".concat(wrongLetters.length > 0 ? '<p> Wrong Letters:</p>' : '', "\n      ").concat(wrongLetters.map(function (letter) { return "<span>".concat(letter.toUpperCase(), "</span>"); }), "\n    ");
    }
};
//* ------ Game starts here ----- //
window.addEventListener('keydown', function (e) {
    if (messageEl) {
        if (attemptsCount === maxWrongAttempts) {
            messageEl.innerText = 'You lost 🤡';
            messageEl.classList.add('lose-color');
            gameOver = true;
        }
    }
    if (!gameOver) {
        var letter = e.key;
        if (/^[a-zA-Z]$/.test(letter)) {
            if (selectedWord.includes(letter)) {
                if (!correctLetters.includes(letter)) {
                    correctLetters.push(letter);
                    displayWord();
                }
                else {
                    if (messageEl) {
                        messageEl.innerText = "".concat(letter.toUpperCase(), " - was already!");
                        messageEl.classList.add('info-color');
                        setTimeout(function () {
                            messageEl.innerText = '';
                            messageEl.classList.remove('info-color');
                        }, 2000);
                    }
                }
            }
            else {
                if (!wrongLetters.includes(letter)) {
                    wrongLetters.push(letter);
                    attemptsCount += 1;
                    updateWrongLettersEl();
                }
                else {
                    if (messageEl) {
                        messageEl.innerText = "".concat(letter.toUpperCase(), " - was already!");
                        messageEl.classList.add('info-color');
                        setTimeout(function () {
                            messageEl.innerText = '';
                            messageEl.classList.remove('info-color');
                        }, 2000);
                    }
                }
            }
        }
        else {
            if (messageEl) {
                messageEl.innerText = "".concat(letter.toUpperCase(), " - is not a letter!");
                messageEl.classList.add('info-color');
                setTimeout(function () {
                    messageEl.innerText = '';
                    messageEl.classList.remove('info-color');
                }, 2000);
            }
        }
    }
});
displayWord();
