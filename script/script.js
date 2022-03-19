prompt("Make a choice:")

let userSelection = userPlay();
function userPlay(){
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random() * 3)];
}

let computerSelection = computerPlay();

function computerPlay() {
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock")
        {
            return "Draw.";
        } else if (computerSelection === "Paper"){
            return "Computer wins!.";
        } else {
            return "User wins.";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock")
        {
            return "User wins!.";
        } else if (computerSelection === "Paper") {
            return "Draw.";
        } else {
            return "Computer wins!.";
        }
    } else {
        if (computerSelection === "Rock") {
            return "Computer wins!.";
        } else if (computerSelection === "Paper") {
            return "User wins!.";
        } else {
            return "Draw.";
        }
    } 
}
console.log(playerRound(userPlay, computerSelection));