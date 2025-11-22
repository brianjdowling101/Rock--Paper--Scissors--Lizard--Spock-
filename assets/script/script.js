/* jshint esversion: 6 */

// Wait until the DOM is fully loaded before running any JavaScript
document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Game Configuration & State
    // ----------------------------

    // All possible choices in the game
    const options = ["rock", "paper", "scissors", "lizard", "spock"];

    // The score a player needs to reach to win
    const WINNING_SCORE = 15;

    // Define which choices beat which other choices
    const winsAgainst = {
        rock: ['scissors', 'lizard'],      // Rock beats Scissors & Lizard
        paper: ['rock', 'spock'],          // Paper beats Rock & Spock
        scissors: ['paper', 'lizard'],     // Scissors beats Paper & Lizard
        lizard: ['paper', 'spock'],        // Lizard beats Paper & Spock
        spock: ['rock', 'scissors']        // Spock beats Rock & Scissors
    };

    // ----------------------------
    // Game Score State
    // ----------------------------
    let playerScore = 0;       // Player's current score
    let computerScore = 0;     // Computer's current score

    // ----------------------------
    // DOM Elements
    // ----------------------------

    const playerScoreDisplay = document.getElementById("player-score");     // Display for player score
    const computerScoreDisplay = document.getElementById("computer-score"); // Display for computer score
    const resultDisplay = document.getElementById("result");               // Displays round/game results
    const startButton = document.getElementById("start");                  // Start/Restart button
    const optionButtons = document.querySelectorAll(".options button");    // All choice buttons

    // Disable all option buttons until the game starts
    disableOptions();

    // ----------------------------
    // Game Functions
    // ----------------------------

    /**
     * playRound
     * Handles a single round of the game.
     * @param {string} playerSelection - The player's choice
     */
    function playRound(playerSelection) {
        // Randomly select an option for the computer
        const computerSelection = options[Math.floor(Math.random() * options.length)];

        // Check for a tie
        if (playerSelection === computerSelection) {
            resultDisplay.textContent = `Tie! You both chose ${playerSelection}.`;
            return; // No score changes
        }

        // Check if the player wins the round
        if (winsAgainst[playerSelection].includes(computerSelection)) {
            playerScore++;         // Increment player score
            updateScores();        // Update DOM scores
            resultDisplay.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        } else {
            // Computer wins the round
            computerScore++;       // Increment computer score
            updateScores();        // Update DOM scores
            resultDisplay.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
        }

        // Check for end-of-game conditions
        if (playerScore === WINNING_SCORE) {
            resultDisplay.textContent = "🎉 You won the game!";
            disableOptions(); // Stop further rounds
        } else if (computerScore === WINNING_SCORE) {
            resultDisplay.textContent = "💀 You lost the game!";
            disableOptions(); // Stop further rounds
        }
    }

    /**
     * updateScores
     * Updates the DOM elements to reflect current scores
     */
    function updateScores() {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    /**
     * disableOptions
     * Disables all choice buttons (used when the game hasn't started or has ended)
     */
    function disableOptions() {
        optionButtons.forEach(btn => btn.disabled = true);
    }

    /**
     * enableOptions
     * Enables all choice buttons (used when the game starts or restarts)
     */
    function enableOptions() {
        optionButtons.forEach(btn => btn.disabled = false);
    }

    /**
     * resetGame
     * Resets scores, updates the DOM, and enables option buttons for a new game
     */
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        resultDisplay.textContent = "Win, Lose, or Tie?"; // Reset result message
        enableOptions();
    }

    // ----------------------------
    // Event Listeners
    // ----------------------------

    // Start or restart the game
    startButton.addEventListener("click", () => {
        startButton.textContent = "Restart";  // Update button text
        resetGame();                           // Reset scores and enable buttons
    });

    // Add click events for each choice button
    optionButtons.forEach(button => {
        button.addEventListener("click", () => playRound(button.id));
    });

    // ----------------------------
    // Feedback Form Submission
    // ----------------------------

    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevent page reload

            const container = form.parentElement;

            // A thank-you message
            container.innerHTML =
                '<p style="font-size:1.2rem; padding:1em; text-align:center; color:white; font-weight:bold;">Thanks! For the feedback!</p>';
        });
    }

}); // END DOMContentLoaded







