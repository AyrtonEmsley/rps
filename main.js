function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection;

  if (player === computer) {
    return "It's a tie!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return `You win! ${player} beats ${computer}`;
  } else {
    return `You lose! ${computer} beats ${player}`;
  }
}

/*
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You win")) {
     playerScore++;
    } else if (result.startsWith("You lose")) {
     computerScore++;
    }
  }

  console.log(`Final Score - You: ${playerScore} | Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}

game();
*/