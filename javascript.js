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

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const scoreboard = document.querySelector('#scoreboard');
const gameOutcome = document.createElement('p');
const scoreboardContent = document.createElement('p');

rockBtn.addEventListener('click', () => {
    game("rock");
});

paperBtn.addEventListener('click', () => {
    game("paper");
});

scissorsBtn.addEventListener('click', () => {
    game("scissors");
});

let outcome;
function game(playerSelection) {
    const computerSelection = getComputerChoice();
    outcome = playRound(playerSelection, computerSelection);
    console.log(outcome);
    
    gameOutcome.textContent = outcome;
    scoreboardContent.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
    scoreboard.appendChild(gameOutcome);
    scoreboard.appendChild(scoreboardContent);

    if (playerScore == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        gameOutcome.textContent = "Game Over! You Win!";
    } else if (computerScore == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        game.outcome.textContent = "Game Over! Computer Wins!"
    }
}