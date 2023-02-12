let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let output = document.querySelector("#output");
let game = true; 

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

function stopGame(){
    game = false;
    if (pScore > 5) {
        output.innerHTML = "PLAYER WON!"
    } else if (cScore > 5) {
        output.innerHTML = "COMPUTER WON!"
    }
}


rock.addEventListener("click",()=>{playRound("rock",getComputerChoice())});
paper.addEventListener("click",()=>{playRound("paper",getComputerChoice())});
scissors.addEventListener("click",()=>{playRound("scissors",getComputerChoice())});


var dScore=0;
var cScore=0;
var pScore=0;
function playRound(playerSelection, computerSelection) {
    if (game) {
        if (playerSelection == computerSelection) {
            output.innerHTML = "Draw!";
            dScore++
        } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")){
            output.innerHTML =`You Lose! ${computerSelection} beats ${playerSelection}`;
            cScore++
        } else {
            output.innerHTML =`You Win! ${playerSelection} beats ${computerSelection}`;
            pScore++
        }
        if (pScore > 5 || cScore > 5) stopGame();
    }
}







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