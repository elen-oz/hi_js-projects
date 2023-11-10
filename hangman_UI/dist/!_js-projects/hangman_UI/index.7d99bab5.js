//* ------ Model ------- //
const words = [
    "leg",
    "foot",
    "arm",
    "hand",
    "toe",
    "finger",
    "tongue"
];
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);
const correctLetters = [];
const wrongLetters = [];
let attemptsCount = 0;
let gameOver = false;
const maxWrongAttempts = selectedWord.length;
//* ------ View ------- //
const wordEl = document.querySelector("#word");
const wrongLettersEl = document.querySelector("#wrong-letters");
const messageEl = document.querySelector("#message");
//* ------ Controller ------ //
const displayWord = ()=>{
    if (wordEl) wordEl.innerHTML = `
      ${selectedWord.split("").map((letter)=>`
            <span class="letter">
              ${correctLetters.includes(letter) ? letter.toUpperCase() : ""}
            </span>
          `).join("")}
    `;
    let innerWord = "";
    if (wordEl) innerWord = wordEl.innerText.split("\n").join("");
    if (messageEl) {
        if (innerWord.toUpperCase() === selectedWord.toUpperCase()) {
            messageEl.innerText = "You won! \uD83D\uDE08";
            messageEl.classList.add("win-color");
            gameOver = true;
        }
    }
};
const updateWrongLettersEl = ()=>{
    if (wrongLettersEl) wrongLettersEl.innerHTML = `
      ${wrongLetters.length > 0 ? "<p> Wrong Letters:</p>" : ""}
      ${wrongLetters.map((letter)=>`<span>${letter.toUpperCase()}</span>`)}
    `;
};
//* ------ Game starts here ----- //
window.addEventListener("keydown", (e)=>{
    if (messageEl) {
        if (attemptsCount === maxWrongAttempts) {
            messageEl.innerText = "You lost \uD83E\uDD21";
            messageEl.classList.add("lose-color");
            gameOver = true;
        }
    }
    if (!gameOver) {
        const letter = e.key;
        if (/^[a-zA-Z]$/.test(letter)) {
            if (selectedWord.includes(letter)) {
                if (!correctLetters.includes(letter)) {
                    correctLetters.push(letter);
                    displayWord();
                } else if (messageEl) {
                    messageEl.innerText = `${letter.toUpperCase()} - was already!`;
                    messageEl.classList.add("info-color");
                    setTimeout(()=>{
                        messageEl.innerText = "";
                        messageEl.classList.remove("info-color");
                    }, 2000);
                }
            } else {
                if (!wrongLetters.includes(letter)) {
                    wrongLetters.push(letter);
                    attemptsCount += 1;
                    updateWrongLettersEl();
                } else if (messageEl) {
                    messageEl.innerText = `${letter.toUpperCase()} - was already!`;
                    messageEl.classList.add("info-color");
                    setTimeout(()=>{
                        messageEl.innerText = "";
                        messageEl.classList.remove("info-color");
                    }, 2000);
                }
            }
        } else if (messageEl) {
            messageEl.innerText = `${letter.toUpperCase()} - is not a letter!`;
            messageEl.classList.add("info-color");
            setTimeout(()=>{
                messageEl.innerText = "";
                messageEl.classList.remove("info-color");
            }, 2000);
        }
    }
});
displayWord();

//# sourceMappingURL=index.7d99bab5.js.map
