
// randomly choose a number between 0-2 and each value is assigned
// rock, paper or scissors
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


/*Plays a single round a Rock Paper Scissors and return a string delcaring
why you won or lost - based on your choice of input */
function playRound(playerSelection, computerSelection) {
    let result;

    if(playerSelection === computerSelection) {
        result = "it's a tie!"
    }

    else if(playerSelection == "rock") {
        if(computerSelection == "scissors") {
            result = "You win! Rock beats Scissors"
        }
       else if(computerSelection == "paper") {
            result = "You lose! Paper beats Rock"
        }
    }

    else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            result = "You lose! Rock beats Scissors"
        }
       else if(computerSelection == "paper") {
            result = "You win! Scissors beats Paper"
        }
    }

    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            result = "You win! Paper beats Rock"
        }
       else if(computerSelection == "scissors") {
            result = "You lose! Scissors beats Paper"
        }
    }

    return result;

}


/* game() function allows the game to be played up to 5 rounds then by comparing
the score of player and computer it's declares if the player won or lose out of 5 */


function game() {
    let message, resultOutput, playerSelection, computerSelection, messageSplit;
    let playerScore = 0; 
    let computerScore = 0;


    // for loop - allows 5 rounds of the game
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt(`Type "rock", "paper", or "scissors" !`).toLowerCase();
        computerSelection = getComputerChoice();


        // message stores the value from playRound function, then the string sentence
        // is split and put in messageSplit as a array

        /* This allows index to be compared to see if the player won or lost
        and update the score accordinly */
        message = playRound(playerSelection, computerSelection);
        messageSplit = message.split(" ");


        if(messageSplit.indexOf("win!") == 1) {
            playerScore += 1;
        }
        else if(messageSplit.indexOf("lose!") == 1) {
            computerScore += 1;
        }       
        alert(message);
    }


    resultOutput = (playerScore > computerScore) ? "You win" + 
    ` ${playerScore} - ${computerScore}` 
    
    : "You lose" + ` ${playerScore} - ${computerScore}` ;
    return resultOutput;
}


console.log(game());




