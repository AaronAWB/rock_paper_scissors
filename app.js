let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const playerScoreCounter = document.getElementById("player-score-count");
const computerScoreCounter = document.getElementById("computer-score-count");
const resultDisplay = document.getElementById("result-display");

rockButton.addEventListener("click", function() {
    playGame("rock");
});

paperButton.addEventListener("click", function() {
    playGame("paper");
});

scissorsButton.addEventListener("click", function() {
    playGame("scissors");
});

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function playGame (playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        draw(computerChoice, playerChoice);
    } else {
        switch (playerChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    lose(computerChoice, playerChoice);
                } else {
                    win(computerChoice, playerChoice);
                } 
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    lose(computerChoice, playerChoice);
                } else {
                    win(computerChoice, playerChoice);
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    lose(computerChoice, playerChoice);
                } else {
                    win(computerChoice, playerChoice);
                }
                break;
        }   
   }
  
}

function win (computerChoice, playerChoice) {
    ++playerScore;
    resultDisplay.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You WIN!`
    playerScoreCounter.textContent = `${playerScore}`
}

function lose (computerChoice, playerChoice) {
    ++computerScore;
    resultDisplay.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You LOSE!`
    computerScoreCounter.textContent = `${computerScore}`
}

function draw (computerChoice, playerChoice) {
    resultDisplay.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. It's a TIE!`
}


    
    
    
    
