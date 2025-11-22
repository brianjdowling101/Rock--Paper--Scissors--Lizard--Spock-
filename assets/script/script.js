/* jshint esversion: 6 */
/* jshint loopfunc: true */

// Wait for the entire page (DOM) to load before running any game code
document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Game Settings
    // ----------------------------
    const options = ["rock", "paper", "scissors", "lizard", "spock"]; // Possible player/computer choices
    const WINNING_SCORE = 15; // Score needed to win the game

    // Mapping of each choice to the choices it defeats
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
    // Game State Variables
    // ----------------------------
    let playerScore = 0;    // Tracks player's score
    let computerScore = 0;  // Tracks computer's score

    // ----------------------------
    // DOM Elements
    // ----------------------------
    const playerScoreDisplay = document.getElementById("player-score"); // Where player score is shown
    const computerScoreDisplay = document.getElementById("computer-score"); // Where computer score is shown
    const resultDisplay = document.getElementById("result"); // Where round result is shown
    const startButton = document.getElementById("start"); // Start/Restart button
    const optionButtons = document.querySelectorAll(".options button"); // Rock/Paper/etc buttons

    // Disable all option buttons until the game starts
    disableOptions();

    // ----------------------------
    // Core Game Functions
    // ----------------------------

    // Play one round of the game
    function playRound(playerSelection, computerSelection) {

        // Case: tie
        if (playerSelection === computerSelection) {
            return `Tie! You both chose ${playerSelection}.`;
        }

        // Case: player wins
        if (winsAgainst[playerSelection].includes(computerSelection)) {
            playerScore++;         // Increment player score
            updateScores();        // Update scoreboard display

            // Check if player reached winning score
            if (playerScore === WINNING_SCORE) {
                endGame('🎉 You win the game!'); // End game with message
            }

            return `You win this round! ${playerSelection} beats ${computerSelection}.`;

        } else { // Case: computer wins
            computerScore++;       // Increment computer score
            updateScores();        // Update scoreboard display

            // Check if computer reached winning score
            if (computerScore === WINNING_SCORE) {
                endGame('💀 You lose the game!'); // End game with message
            }

            return `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
        }
    }

    // Update the scoreboard on the page
    function updateScores() {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    // Randomly select a choice for the computer
    function computerPlay() {
        return options[Math.floor(Math.random() * options.length)];
    }

    // Disable all option buttons (used at game start or end)
    function disableOptions() {
        optionButtons.forEach(btn => btn.disabled = true);
    }

    // Enable all option buttons (used when starting a game)
    function enableOptions() {
        optionButtons.forEach(btn => btn.disabled = false);
    }

    // End the game and show a message
    function endGame(message) {
        resultDisplay.textContent = message;
        disableOptions(); // Prevent further clicks
    }

    // Reset the game state and scoreboard
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScores();           // Reset display
        resultDisplay.textContent = ""; // Clear previous round results
        enableOptions();          // Allow player to make choices
    }

    // ----------------------------
    // Event Listeners
    // ----------------------------

    // Start/Restart button click
    startButton.addEventListener("click", () => {
        startButton.textContent = "Restart"; // Change button text after first click
        resetGame();                         // Reset scores and enable options
        enableOptions();                     // Make sure option buttons are clickable
    });

    // Option buttons click (Rock, Paper, Scissors, Lizard, Spock)
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].addEventListener("click", function () {

            const playerSelection = this.id;     // Button ID is the player's choice
            const computerSelection = computerPlay(); // Random computer choice
            const result = playRound(playerSelection, computerSelection); // Play a round
            resultDisplay.textContent = result; // Display round result
        });
    }

});

// ----------------------------
// Feedback Form Handling
// ----------------------------
const form = document.getElementById('booking-form');
const container = form.parentElement; // Container of the form

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default page reload

    // Thank-you message
    container.innerHTML = '<p style="font-size:1.2rem; padding:1em; text-align:center; color:white; font-weight:bold;">Thanks! For the feedback!</p>';
});




