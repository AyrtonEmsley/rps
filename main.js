let playerScore = 0;
let computerScore = 0;

// Get references to DOM elements
const roundResult = document.getElementById('round-result');
const scoreDisplay = document.getElementById('score');
const winnerDisplay = document.getElementById('winner');

// Generate random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play one round
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const player = playerSelection.toLowerCase();
  const computer = computerSelection;
  let result = '';

  if (player === computer) {
    result = "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    result = `You win! ${player} beats ${computer}`;
    playerScore++;
  } else {
    result = `You lose! ${computer} beats ${player}`;
    computerScore++;
  }

  roundResult.textContent = result;
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    winnerDisplay.textContent =
      playerScore === 5 ? "🎉 You win the game!" : "💀 Computer wins the game!";
    disableButtons();
  }
}

// Disable buttons when game ends
function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

// Add event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
// Reset game
document.getElementById('reset').addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  roundResult.textContent = '';
  scoreDisplay.textContent = 'Player: 0 | Computer: 0';
  winnerDisplay.textContent = '';
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;
});
// Initialize score display
scoreDisplay.textContent = 'Player: 0 | Computer: 0';
// Initialize round result and winner display
roundResult.textContent = '';   

