let playerScore = 0
let computerScore = 0
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener ("click", playGame("rock"));
paperButton.addEventListener ("click", playGame("paper"));
scissorsButton.addEventListener ("clock", playGame("scissors"));

const choices = ["rock", "paper", "scissors"];

function computerChoice () {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function playGame (playerChoice) {
   if (playerChoice === computerChoice()) return "tie";
   switch (playerChoice) {
        case "rock":
            if (computerChoice() === "paper") {
                return "lose";
                break;
            } else {
                return "win";
            }
        case "paper":
            if (computerChoice() === "scissors") {
                return "lose";
                break;
            } else {
                return "win";
            }
        case "scissors":
            if (computerChoice() === "rock") {
                return "lose";
                break;
            } else {
                return "win";
            }
   }
}

function updateScore (playGame()) {
    switch (playGame()) {
        case "win":
            ++playerScore;
        case "lose":
            ++computerScore;
    }
}
    
    
    
    
    
    
