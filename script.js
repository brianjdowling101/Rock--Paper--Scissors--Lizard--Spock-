// Define an array of game options

const options = ["rock", "paper", "scissors", "lizard", "spock"];

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Get DOM elements for displaying scores and result
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
    // Find the indexes of player and computer selections in the options array
    const playerIndex = options.indexOf(playerSelection);
    const computerIndex = options.indexOf(computerSelection);
}
// Determine the result of the round based on the difference in indexes
const resultIndex = (playerIndex - computerIndex + 5) % 5;
switch (resultIndex) {
    // If indexes are equal, the round is a tie
    case 0:
        return "Tie!";
    // If the difference in indexes is 1 or 3, the player wins the round
    case 1:
    case 3:
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        // If the player's score reaches 10, display win message and disable options
        if (playerScore === 10) {
            resultDisplay.textContent = "You win!";
            disableOptions();
            showPlayAgainButton();
        }
        return "Win!";
    // If the difference in indexes is 2 or 4, the computer wins the round
    case 2:
    case 4:
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        // If the computer's score reaches 10, display lose message and disable options
        if (computerScore === 10) {
            resultDisplay.textContent = "You lose!";
            disableOptions();
            showPlayAgainButton();
        }
        return "Lose!";
}
