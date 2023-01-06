let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const OPTIONS = ["rock", "paper", "scissors"];
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function playRound (playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    // Tie
    if (playerSelection == computerSelection) {
        return "It's a tie! You both selected " + playerSelection
    }

    // If the player selects rock
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }

    // If the player selects paper
    if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }

    // If the player selects scissors
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function game() {
    let outcome;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Select Rock, Paper, or Scissors.");
        outcome = playRound(playerSelection,getComputerChoice());
        console.log(outcome);
    }
    console.log("Player score: " + playerScore + " Computer Score: " + computerScore);
}