
// Constant declaration
const rockChoice = document.querySelector('.rock-div');
const paperChoice = document.querySelector('.paper-div');
const scissorsChoice = document.querySelector('.scissors-div');
const choices = document.querySelectorAll('.rock-div, .paper-div, .scissors-div');
const playAgainBtn = document.querySelector('.play-again');
const headingThree = document.querySelector('.heading-three');
const entirePage = document.querySelector('.entire-page');
const overlayHeading = document.querySelector('.overlay-heading');
const decisionDiv = document.querySelector('.module-extra');
const resultTxt = document.querySelector('.decision-paragraph');
const overlay = document.querySelector('.overlay');
const playerCurrentScore = document.querySelector('.player-score-counter')
const computerCurrentScore = document.querySelector('.computer-score-counter')

const moduleThree = document.querySelector('.module-three');




// Global Variable
let isGameOver = false;
let result = '';
let playerSum = 0;
let computerSum = 0;
let roundIncrementer = 0;



// All events when clicking on divs/button
rockChoice.addEventListener('click', getRockResult)
paperChoice.addEventListener('click', getPaperResult)
scissorsChoice.addEventListener('click', getScissorsResult)
playAgainBtn.addEventListener('click', resetGame);



// applies for all choices
choices.forEach(choice => {
    choice.addEventListener('click', roundUpdater);
    choice.addEventListener('click', resultOutput);
    choice.addEventListener('click', gameOver);

});



// Display Game Over section
function gameOver() {
    if(roundIncrementer >= 10) {
        overlay.setAttribute('style', 
        'width: 100vw; height: 100vh; position: absolute; background-color: #ffb703; position: absolute; transform: scale(0.9); border-radius: 1em;');
        overlayHeading.textContent = 'Game Over'
        playAgainBtn.setAttribute('style', 'position: relative;');
        isGameOver = true;
        roundIncrementer = 0;
        playerCurrentScore.textContent = 0;
        computerCurrentScore.textContent = 0;
        headingThree.textContent = `Choose - [ Round ${roundIncrementer} ] - Weapon`;

    }
    console.log(roundIncrementer);
}


// outputs result each round
function resultOutput() {
    decisionDiv.setAttribute('style', 'width: 320px; transform: scale(0.9);');
}


// increments round by 1
function roundUpdater() {
    roundIncrementer += 1;
    headingThree.textContent = `Choose - [ Round ${roundIncrementer} ] - Weapon`;  
}




function resetGame() {
    if(isGameOver == false) {
        roundIncrementer = 1;
    }

    else {
        overlay.removeAttribute('style', 'class');
        overlay.removeChild(overlayHeading);
    }

    playerCurrentScore.textContent = 0;
    computerCurrentScore.textContent = 0;
    headingThree.textContent = `Choose - [ Round ${roundIncrementer} ] - Weapon`;
}




function getRockResult() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice == "scissors") {
        result = "You win! Rock beats Scissors";
        playerSum += 1;
        playerCurrentScore.textContent = playerSum; 
    }

    else if(computerChoice == "paper"){
        result = "You lose! Paper beats Rock";
        computerSum  += 1;
        computerCurrentScore.textContent = computerSum;
    }

    else if(computerChoice == "rock") {
        result = "it's a tie!";
    }
    console.log(result);
    resultTxt.textContent = result;

}



function getPaperResult() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice == "rock") {
        result = "You win! Paper beats Rock";
        playerSum += 1;
        playerCurrentScore.textContent = playerSum; 
    }

    else if(computerChoice == "scissors"){
        result = "You lose! Scissors beats Paper";
        computerSum += 1;
        computerCurrentScore.textContent = computerSum;
    }

    else if(computerChoice == "paper") {
        result = "it's a tie!";
    }
    console.log(result);
    resultTxt.textContent = result;
}




function getScissorsResult() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice == "paper") {
        result = "You win! Scissors beats Paper";
        playerSum += 1;
        playerCurrentScore.textContent = playerSum; 
    }

    else if(computerChoice == "rock"){
        result = "You lose! Rock beats Scissors";
        computerSum += 1;
        computerCurrentScore.textContent = computerSum;
    }

    else if(computerChoice == "scissors") {
        result = "it's a tie!";
    }
    console.log(result);
    resultTxt.textContent = result;
}





/* randomly choose a number between 0-2 and each value is assigned
  as either rock, paper or scissors */
function getComputerChoice() {
    let Computervalue;
    let randNum = Math.floor(Math.random() * 3);
    
    if(randNum == 0) {
        Computervalue = "rock";
    }
    else if(randNum == 1) {
        Computervalue = "paper";
    }
    else {
        Computervalue = "scissors";
    }
    return Computervalue;
}





