// Selecting the elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

// Defining the function to get the computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Defining the function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log('Match draw!');
    alert('MATCH DRAW!');
    return 'Tie!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
             userChoice === 'paper' && computerChoice === 'rock' ||
             userChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win!');
    alert('You win this round! Great Job!');
    wins++;
    winCount.textContent = wins;
    return 'You win!';
  } else {
    console.log('Computer wins!');
    alert('The COMPUTER win this round! Better Luck Next Time!');
    losses++;
    lossCount.textContent = losses;
    return 'The COMPUTER wins!';
  }
}

// Defining the function to play the game
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  result.innerHTML = `You chose ${userChoice}, while the COMPUTER chose ${computerChoice}. ${winner}`;
}

// Adding event listeners to the images
rock.addEventListener('click', function() {
  playGame('rock');
});

paper.addEventListener('click', function() {
  playGame('paper');
});

scissors.addEventListener('click', function() {
  playGame('scissors');
});

// Win/Loss counter
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
let wins = 0;
let losses = 0;
