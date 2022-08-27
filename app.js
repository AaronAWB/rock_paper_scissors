let playerScore = "0"
let computerScore = "0"
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener ("click", playGame("rock-button"));
paperButton.addEventListener ("click", playGame("paper-button"));
scissorsButton.addEventListener ("clock", playGame("scissors-button"));

const choices = ["rock", "paper", "scissors"];

function computerChoice () {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function playGame (playerChoice) {
   
}
    
    
    
    
    
    
