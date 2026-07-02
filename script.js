const form = document.querySelector('#user-input-field')
const guessListDiv = document.querySelector('#guess-queue')
const guessQueue = document.createElement('div')
guessQueue.id = 'list-guess';

let randomNumber = Math.floor((Math.random() * 100) + 1)

let guessList = []
let numOfTrys = 0


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("user-input").value.trim();
    const numGuess = Number(input);

    document.getElementById("user-input").value = "";

    if (!Number.isInteger(numGuess) || numGuess < 1 || numGuess > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    guessList.push(numGuess);
    console.log(`Element added: ${numGuess}`);
    showGuessList();
});

function showGuessList() {
    const newGuess = document.createElement('span')
    newGuess.className = 'guesses'
    guessList.forEach(num => {
        newGuess.textContent = num
        guessQueue.appendChild(newGuess)
        console.log(`guess queue appened : ${newGuess}`)
    });
    guessListDiv.appendChild(guessQueue)
}


function checkTheGuess() { }
function validateAnswer() { }
function init() { }

showGuessList()