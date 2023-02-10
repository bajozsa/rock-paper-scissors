let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let output = document.querySelector("#output");

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


/* var playerSelection = prompt(""); 
playerSelection = playerSelection.toLowerCase();*/

rock.addEventListener("click",()=>{playRound("rock",getComputerChoice())});
paper.addEventListener("click",()=>{playRound("paper",getComputerChoice())});
scissors.addEventListener("click",()=>{playRound("scissors",getComputerChoice())});


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw!");
        output.innerHTML = "Draw!";
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        output.innerHTML =`You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        output.innerHTML =`You Win! ${playerSelection} beats ${computerSelection}`;
    }
}
var dScore=0;
var cScore=0;
var pScore=0;
/* for (let i =0; i < 5; i++) {
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
} */