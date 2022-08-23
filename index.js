

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






