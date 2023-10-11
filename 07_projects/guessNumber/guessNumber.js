let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('form');
const userInput = document.querySelector('#guessField');
const guessList = document.querySelector('.guesses');
const attempts = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const dislayRemaining = document.querySelector('.lastResult');
const newGameButton = document.querySelector('.resultParas');

const p = document.createElement('p');

const guessedNumbers = [];
let remaining = 10;

let play = true;

if (play) {
  submit.addEventListener('submit', (e) => {
    e.preventDefault();
    if(remaining == 1){
        displayMessage('you done with attempts, Game Over!')
        endGame();
    }else{
        let userNumber = parseInt(userInput.value);
        validateGuess(userNumber);
        userInput.value = '';        
    }
  });
}

function validateGuess(guess) {
    if (isNaN(guess)) {

        displayMessage('Please enter valid number');

    }else if(guess > 100){
        displayMessage('number should be less that 100');
    }else if(guess < 0){
        displayMessage('number should be more that zero');
    }else{
        remaining = remaining - 1;
        checkGuess(guess);
        guessedNumbers.push(guess);
    }
}

function checkGuess(guess) {
    if(guess > randomNumber){

        displayMessage('guess smaller number');
        displayguess(guess);

    }else if (guess < randomNumber) {

        displayMessage('guess bigger number');
        displayguess(guess);


    }else if (guess == randomNumber){

        displayMessage('woow... your guess is right');
        displayguess(guess);
        endGame();
    }
}

function displayguess(guess) {
    guessList.appendChild(document.createTextNode(`${guess}, `));
    dislayRemaining.innerHTML =  `${remaining}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = message;
}

function endGame() {
    userInput.setAttribute('disabled','');
    play = false;
    p.innerHTML = "Play Again";
    p.id = "play-again";
    p.style.height = '20px';
    p.style.width = '200px';
    p.style.backgroundColor = 'blue';
    p.style.color = 'white';
    console.log(p);
    newGameButton.appendChild(p);
    userInput.value = ''
    startGame();
}

function startGame() {
    const playAgain = document.querySelector('#play-again');
    playAgain.addEventListener('click', (e) => {
        e.preventDefault();
        remaining = 10;
        play = true;
        displayMessage(' ');
        userInput.removeAttribute('disabled');
        guessList.innerHTML = ''
        newGameButton.removeChild(p);
        userInput.value = ''
        dislayRemaining.innerHTML =  `${remaining}`;
        randomNumber = parseInt(Math.random() * 10 + 1);
    });
}
