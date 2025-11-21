/* jshint esversion: 6 */
/* jshint loopfunc: true */

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Game settings
    // ----------------------------
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    const WINNING_SCORE = 15;

    // Mapping of each choice to the choices it can defeat
    const winsAgainst = {
        rock: [
            'scissors', // Rock crushes scissors
            'lizard'    // Rock crushes lizard
        ],
        paper: [
            'rock',     // Paper covers rock
            'spock'     // Paper disproves Spock
        ],
        scissors: [
            'paper',    // Scissors cut paper
            'lizard'    // Scissors decapitate lizard
        ],
        lizard: [
            'paper',    // Lizard eats paper
            'spock'     // Lizard poisons Spock
        ],
        spock: [
            'rock',     // Spock vaporizes rock
            'scissors'  // Spock smashes scissors
        ],
    };

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
    const optionButtons = document.querySelectorAll(".options button");

    disableOptions(); // disable options until game starts

    // ----------------------------
    // Core Functions
    // ----------------------------

    function playRound(playerSelection, computerSelection) {
        // Checks against the results

        // tie
        if (playerSelection === computerSelection) {
            return `Tie! You both chose ${playerSelection}.`;
        }

        // player wins
        if (winsAgainst[playerSelection].includes(computerSelection)) {
            playerScore++;
            updateScores();
            if (playerScore === WINNING_SCORE) {
                endGame('🎉 You win the game!');
            }
            return `You win this round! ${playerSelection} beats ${computerSelection}.`;
        } else {
            // computer wins
            computerScore++;
            updateScores();
            if (computerScore === WINNING_SCORE) {
                endGame('💀 You lose the game!');
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
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        resultDisplay.textContent = "";
        enableOptions();
    }

    // ----------------------------
    // Event Listeners
    // ----------------------------

    startButton.addEventListener("click", () => {
        startButton.textContent = "Restart";
        resetGame();
        enableOptions();
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
);



const form = document.getElementById('booking-form');
const container = form.parentElement; // .booking-form-container

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload.

    // Replace form with success message
    container.innerHTML = '<p style="font-size:1.2rem; padding:1em; text-align:center; color:white; font-weight:bold;">Thanks! For the feedback!</p>';

});



