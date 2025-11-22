/* jshint esversion: 6 */

// Wait until the DOM is fully loaded before running any JavaScript
document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Game Configuration & State
    // ----------------------------

    // The available choices for the game
    const options = ["rock", "paper", "scissors", "lizard", "spock"];

    // The score needed to win the game
    const WINNING_SCORE = 15;

    // Defines which options beat which other options
    const winsAgainst = {
        rock: ['scissors', 'lizard'],      // Rock crushes Scissors & Lizard
        paper: ['rock', 'spock'],          // Paper covers Rock & disproves Spock
        scissors: ['paper', 'lizard'],     // Scissors cuts Paper & decapitates Lizard
        lizard: ['paper', 'spock'],        // Lizard eats Paper & poisons Spock
        spock: ['rock', 'scissors']        // Spock vaporizes Rock & smashes Scissors
    };

    // ----------------------------
    // Game Score State
    // ----------------------------
    let playerScore = 0;       // Player's current score
    let computerScore = 0;     // Computer's current score

    // ----------------------------
    // DOM Elements
    // ----------------------------

    const playerScoreDisplay = document.getElementById("player-score");     // Where player's score is displayed
    const computerScoreDisplay = document.getElementById("computer-score"); // Where computer's score is displayed
    const resultDisplay = document.getElementById("result");               // Display round/game results
    const startButton = document.getElementById("start");                  // Start/Restart game button
    const optionButtons = document.querySelectorAll(".options button");    // All choice buttons (rock, paper, etc.)

    // Disable all option buttons initially until the game starts
    disableOptions();

    // ----------------------------
    // Game Functions
    // ----------------------------

    /**
     * playRound:
     * Handles a single round of the game.
     * @param {string} playerSelection - The player's choice
     */
    function playRound(playerSelection) {
        // Computer randomly selects an option
        const computerSelection = options[Math.floor(Math.random() * options.length)];

        // Check for tie
        if (playerSelection === computerSelection) {
            resultDisplay.textContent = `Tie! You both chose ${playerSelection}.`;
            return;
        }

        // Check if the player wins
        if (winsAgainst[playerSelection].includes(computerSelection)) {
            playerScore++;
            updateScores();
            resultDisplay.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        } else {
            // Computer wins the round
            computerScore++;
            updateScores();
            resultDisplay.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
        }

        // Check for end of game
        if (playerScore === WINNING_SCORE) {
            resultDisplay.textContent = "🎉 You won the game!";
            disableOptions();
        } else if (computerScore === WINNING_SCORE) {
            resultDisplay.textContent = "💀 You lost the game!";
            disableOptions();
        }
    }

    /**
     * updateScores:
     * Updates the DOM with current player and computer scores.
     */
    function updateScores() {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    /**
     * disableOptions:
     * Disables all option buttons (used when game hasn't started or has ended)
     */
    function disableOptions() {
        optionButtons.forEach(btn => btn.disabled = true);
    }

    /**
     * enableOptions:
     * Enables all option buttons (used when game starts or restarts)
     */
    function enableOptions() {
        optionButtons.forEach(btn => btn.disabled = false);
    }

    /**
     * resetGame:
     * Resets scores, updates DOM, and enables option buttons for a new game.
     */
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        resultDisplay.textContent = "Win, Lose, or Tie?";
        enableOptions();
    }

    // ----------------------------
    // Event Listeners
    // ----------------------------

    // Start/Restart button
    startButton.addEventListener("click", () => {
        startButton.textContent = "Restart";  // Change button text to "Restart"
        resetGame();                           // Reset scores and enable options
    });

    // Option buttons (rock, paper, etc.)
    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            playRound(button.id);             // Play a round using the button's ID as the player's choice
        });
    });

    // ----------------------------
    // Feedback Form Submission
    // ----------------------------

    const form = document.getElementById('booking-form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent default form submission
            const container = form.parentElement;

            // A thank-you message
            container.innerHTML =
                '<p style="font-size:1.2rem; padding:1em; text-align:center; color:white; font-weight:bold;">Thanks! For the feedback!</p>';
        });
    }

}); // END DOMContentLoaded





