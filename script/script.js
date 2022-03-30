const userChoiceDisplay = document.createElement('h2');
const computerChoicesDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h2');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoicesDisplay, resultDisplay);

const choices = ['Rock', 'Paper', 'Scissors'];
let userChoice
let computerChoice

const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = 'user choice: ' + userChoice;
  generateComputerChoice();
  getResult()
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice
  computerChoicesDisplay.innerHTML = random = randomHTML = 'computer choice: ' + computerChoice;
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button');
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener('click', handleClick);
  gameGrid.appendChild(button);
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'ScissorsPaper':
    case 'RockScissors':
    case 'PaperRock':
      resultDisplay.innerHTML = "You Win!"
      break
    case 'PaperScissors':
    case 'ScissorsRock':
    case 'RockPaper':
      resultDisplay.innerHTML = "You lost"
      break
    case 'PaperPaper':
    case 'RockRock':
    case 'ScissorsScissors':
      resultDisplay.innerHTML = "It's a Tie!"
      break
  }
}
  
/*  let userScore = parseInt(0);
  let computerScore = parseInt(0);
  let win = "You win"
  let lose = "You lose"
  let tie = "It is a tie"
  
  for(var i=0;i<5;i++){
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }*/
