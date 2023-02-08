function getComputerChoice(){
    var x = Math.floor(Math.random() * 3);
    if (x == 0){
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else {
        return "scissors";
    }

};

var playerSelection = prompt("");
playerSelection = playerSelection.toLowerCase();
var computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase == computerSelection) {
        return "Draw!";
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}
var dScore=0;
var cScore=0;
var pScore=0;
for (let i =0; i < 5; i++) {
    computerSelection = getComputerChoice();



    if (playerSelection == computerSelection) {
        dScore++;
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        cScore++;
    } else {
        pScore++;
    }
}
if (cScore > pScore) {
    console.log("Computer Won!");
} else if (cScore < pScore) {
    console.log("Player Won!");
} else {
    console.log("Draw!");
}