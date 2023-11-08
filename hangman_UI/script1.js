//* ------ Model ------- //
var words1 = ['leg', 'foot', 'arm', 'hand', 'toe', 'finger'];
var selectedWord1 = words1[Math.floor(Math.random() * words1.length)];
var correctLetters1 = [];
var wrongLetters1 = [];
var attemptsCount1 = 0;
var gameOver1 = false;
var maxWrongAttempts1 = selectedWord1.length;
//* ------ View ------- //
// const wordEl1 = document.querySelector('#word');
var wordEl1 = document.querySelector('#word');
var wrongLettersEl1 = document.querySelector('#wrong-letters');
var messageEl1 = document.querySelector('#message');
//* ------ Controller ------ //
var displayWord1 = function () {
    if (wordEl1) {
        wordEl1.innerHTML = "\n      ".concat(selectedWord1
            .split('')
            .map(function (letter) { return "\n            <span class=\"letter\">\n              ".concat(correctLetters1.includes(letter) ? letter.toUpperCase() : '', "\n            </span>\n          "); })
            .join(''), "\n    ");
    }
    var innerWord1 = '';
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
var updateWrongLettersEl1 = function () {
    if (wrongLettersEl1) {
        wrongLettersEl1.innerHTML = "\n      ".concat(wrongLetters1.length > 0 ? '<p> Wrong Letters:</p>' : '', "\n      ").concat(wrongLetters1.map(function (letter) { return "<span>".concat(letter.toUpperCase(), "</span>"); }), "\n    ");
    }
};
//* ------ Game starts here ----- //
window.addEventListener('keydown', function (e) {
    if (messageEl1) {
        if (attemptsCount1 === maxWrongAttempts1) {
            messageEl1.innerText = 'You lost 🤡';
            messageEl1.classList.add('lose-color');
            gameOver1 = true;
        }
    }
    if (!gameOver1) {
        var letter1 = e.key;
        if (/^[a-zA-Z]$/.test(letter1)) {
            if (selectedWord1.includes(letter1)) {
                if (!correctLetters1.includes(letter1)) {
                    correctLetters1.push(letter1);
                    displayWord1();
                }
                else {
                    if (messageEl1) {
                        messageEl1.innerText = "".concat(letter1.toUpperCase(), " - was already!");
                        messageEl1.classList.add('info-color');
                        setTimeout(function () {
                            messageEl1.innerText = '';
                            messageEl1.classList.remove('info-color');
                        }, 2000);
                    }
                }
            }
            else {
                if (!wrongLetters1.includes(letter1)) {
                    wrongLetters1.push(letter1);
                    attemptsCount1 += 1;
                    updateWrongLettersEl1();
                }
                else {
                    if (messageEl1) {
                        messageEl1.innerText = "".concat(letter1.toUpperCase(), " - was already!");
                        messageEl1.classList.add('info-color');
                        setTimeout(function () {
                            messageEl1.innerText = '';
                            messageEl1.classList.remove('info-color');
                        }, 2000);
                    }
                }
            }
        }
        else {
            if (messageEl1) {
                messageEl1.innerText = "".concat(letter1.toUpperCase(), " - is not a letter!");
                messageEl1.classList.add('info-color');
                setTimeout(function () {
                    messageEl1.innerText = '';
                    messageEl1.classList.remove('info-color');
                }, 2000);
            }
        }
    }
});
displayWord1();
