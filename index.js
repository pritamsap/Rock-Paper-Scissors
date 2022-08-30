

// Rough Code


const rockChoice = document.querySelector('.rock-div');
const paperChoice = document.querySelector('.paper-div');
const scissorsChoice = document.querySelector('.scissors-div');

const scoreCounterPlayer = document.querySelector('.score-update-player')
const scoreCounterComputer = document.querySelector('.score-update-computer')

const choices = document.querySelectorAll('.rock-div, .paper-div, .scissors-div');

const playAgainBtn = document.querySelector('.play-again');

const headingThree = document.querySelector('.heading-three');

const entirePage = document.querySelector('.entire-page');
const overlayHeading = document.querySelector('.overlay-heading');


const decisionDiv = document.querySelector('.module-extra');
const resultTxt = document.querySelector('.decision-paragraph');
const overlay = document.querySelector('.overlay');


let isCondition = true;

rockChoice.addEventListener('click', protocolOne)
paperChoice.addEventListener('click', protocolTwo)
scissorsChoice.addEventListener('click', protocolThree)
playAgainBtn.addEventListener('click', resetter);



function gameOver() {
    if(roundIncrementer > 10) {
        overlay.setAttribute('style', 
        'width: 100vw; height: 100vh; position: absolute; background-color: #ffb703; position: absolute; transform: scale(0.9); border-radius: 1em;');
        decisionDiv.style.width = 0;
        decisionDiv.style.height = 0;
        resultTxt.textContent = '';
        overlayHeading.textContent = 'Game Over'
        playAgainBtn.setAttribute('style', 'position: relative; z-index: 1;');
        isCondition = false;
        roundIncrementer = 0;

    }
    console.log(roundIncrementer);
    
}

choices.forEach(choice => {
    choice.addEventListener('click', roundUpdater);
    choice.addEventListener('click', resultOutput);
    choice.addEventListener('click', gameOver);

});




function resultOutput() {
    decisionDiv.setAttribute('style', 'width: 320px; transform: scale(0.9);');
}

// if Player one Choosed Rock then, it compares the option with Comp and provides result

let playerSum = 0;
let computerSum = 0;
let paragraphPlayer = document.querySelector('.player-score-counter')
let paragraphComputer = document.querySelector('.computer-score-counter')

let roundIncrementer = 0;


function roundUpdater() {
    roundIncrementer += 1;
    headingThree.textContent = `Choose - [ Round ${roundIncrementer} ] - Weapon`;
    

    
}

function resetter() {
    if(isCondition == true) {
        overlay.setAttribute('style', '');
        overlayHeading.textContent = '';
        roundIncrementer = 1;
    }
    paragraphComputer.textContent = 0;
    paragraphPlayer.textContent = 0;
    headingThree.textContent = `Choose - [ Round ${roundIncrementer} ] - Weapon`;
   


}

let result = '';
function protocolOne() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice == "scissors") {
        result = "You win! Rock beats Scissors";
        playerSum += 1;
        paragraphPlayer.textContent = playerSum; 
    }

    else if(computerChoice == "paper"){
        result = "You lose! Paper beats Rock";
        computerSum  += 1;
        paragraphComputer.textContent = computerSum;
    }

    else if(computerChoice == "rock") {
        result = "it's a tie!";
    }
    console.log(result);
    resultTxt.textContent = result;

}



function protocolTwo() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice == "rock") {
        result = "You win! Paper beats Rock";
        playerSum += 1;
        paragraphPlayer.textContent = playerSum; 
    }

    else if(computerChoice == "scissors"){
        result = "You lose! Scissors beats Paper";
        computerSum += 1;
        paragraphComputer.textContent = computerSum;
    }

    else if(computerChoice == "paper") {
        result = "it's a tie!";
    }
    console.log(result);
    resultTxt.textContent = result;

}




function protocolThree() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice == "paper") {
        result = "You win! Scissors beats Paper";
        playerSum += 1;
        paragraphPlayer.textContent = playerSum; 
    }

    else if(computerChoice == "rock"){
        result = "You lose! Rock beats Scissors";
        computerSum += 1;
        paragraphComputer.textContent = computerSum;
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






// /*Plays a single round a Rock Paper Scissors and return a string delcaring
// why you won or lost - based on your choice of input */
// function playRound(playerSelection, computerSelection) {
//     let result;

//     if(playerSelection === computerSelection) {
//         result = "it's a tie!"
//     }

//     else if(playerSelection == "rock") {
//         if(computerSelection == "scissors") {
//             result = "You win! Rock beats Scissors"
//         }
//        else if(computerSelection == "paper") {
//             result = "You lose! Paper beats Rock"
//         }
//     }

//     else if(playerSelection == "scissors") {
//         if(computerSelection == "rock") {
//             result = "You lose! Rock beats Scissors"
//         }
//        else if(computerSelection == "paper") {
//             result = "You win! Scissors beats Paper"
//         }
//     }

//     else if(playerSelection == "paper") {
//         if(computerSelection == "rock") {
//             result = "You win! Paper beats Rock"
//         }
//        else if(computerSelection == "scissors") {
//             result = "You lose! Scissors beats Paper"
//         }
//     }

//     return result;

// }


// /* game() function allows the game to be played up to 5 rounds then by comparing
// the score of player and computer it's declares if the player won or lose out of 5 */


// function game() {
//     let message, resultOutput, playerSelection, computerSelection, messageSplit;
//     let playerScore = 0; 
//     let computerScore = 0;


//     // for loop - allows 5 rounds of the game
//     for(let i = 0; i < 5; i++) {
//         playerSelection = prompt(`Type "rock", "paper", or "scissors" !`).toLowerCase();
//         computerSelection = getComputerChoice();


//         // message stores the value from playRound function, then the string sentence
//         // is split and put in messageSplit as a array

//         /* This allows index to be compared to see if the player won or lost
//         and update the score accordinly */
//         message = playRound(playerSelection, computerSelection);
//         messageSplit = message.split(" ");


//         if(messageSplit.indexOf("win!") == 1) {
//             playerScore += 1;
//         }
//         else if(messageSplit.indexOf("lose!") == 1) {
//             computerScore += 1;
//         }       
//         alert(message);
//     }


//     resultOutput = (playerScore > computerScore) ? "You win" + 
//     ` ${playerScore} - ${computerScore}` 
    
//     : "You lose" + ` ${playerScore} - ${computerScore}` ;
//     return resultOutput;
// }


// console.log(game());




