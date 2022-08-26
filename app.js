//const rockButton = document.getElementById("rock-button");
//rockButton.addEventListener("click", computerChoice());

//const paperButton = document.getElementById("paper-button");
//paperButton.addEventListener("click", computerChoice());

//const scissorsButton = document.getElementById("paper-button");
//scissorsButton.addEventListener("click", computerChoice());

const choices = ["rock", "paper", "scissors"];

function randomChoice () {
    const randomSelection = Math.floor(Math.random() * choices.length);
    return choices[randomSelection]
}

console.log(randomChoice());