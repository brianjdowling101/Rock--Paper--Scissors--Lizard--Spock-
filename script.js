/* jshint esversion: 6 */
/* jshint loopfunc: true */

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Game settings
    // ----------------------------
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    const WINNING_SCORE = 15;

    // ----------------------------
    // Game state
    // ----------------------------
    let playerScore = 0;
    let computerScore = 0;

    // ----------------------------
    // DOM elements
    // ----------------------------
    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    const resultDisplay = document.getElementById("result");
    const startButton = document.getElementById("start");
    const playAgainButton = document.getElementById("play-again");
    const optionButtons = document.querySelectorAll(".options button");

    // Hide "Play Again" initially
    playAgainButton.style.display = "none";
    disableOptions(); // disable options until game starts

    // ----------------------------
    // Core Functions
    // ----------------------------

    function playRound(playerSelection, computerSelection) {
        const playerIndex = options.indexOf(playerSelection);
        const computerIndex = options.indexOf(computerSelection);
        const resultIndex = (playerIndex - computerIndex + 5) % 5;

        if (resultIndex === 0) {
            return `Tie! You both chose ${playerSelection}.`;
        } else if (resultIndex === 1 || resultIndex === 3) {
            playerScore++;
            updateScores();
            if (playerScore === WINNING_SCORE) {
                endGame("🎉 You win the game!");
            }
            return `You win this round! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore++;
            updateScores();
            if (computerScore === WINNING_SCORE) {
                endGame("💀 You lose the game!");
            }
            return `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
        }
    }

    function updateScores() {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    function computerPlay() {
        return options[Math.floor(Math.random() * options.length)];
    }

    function disableOptions() {
        optionButtons.forEach(btn => btn.disabled = true);
    }

    function enableOptions() {
        optionButtons.forEach(btn => btn.disabled = false);
    }

    function endGame(message) {
        resultDisplay.textContent = message;
        disableOptions();
        playAgainButton.style.display = "inline-block";
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        resultDisplay.textContent = "";
        enableOptions();
        playAgainButton.style.display = "none";
    }

    // ----------------------------
    // Event Listeners
    // ----------------------------

    startButton.addEventListener("click", () => {
        resetGame();
        enableOptions();
    });

    playAgainButton.addEventListener("click", () => {
        resetGame();
    });

    for (let i = 0; i < optionButtons.length; i++) {
        // Add a click event listener to each button to play a round of the game
        optionButtons[i].addEventListener("click", function () {
            const playerSelection = this.id;
            const computerSelection = computerPlay();
            const result = playRound(playerSelection, computerSelection);
            resultDisplay.textContent = result;
        });
    }
}
});



