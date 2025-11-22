document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Game Settings
    // ----------------------------
    // Options for the game
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    // Score required to win the game
    const WINNING_SCORE = 15;

    // Define which options beat which
    const winsAgainst = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['paper', 'spock'],
        spock: ['rock', 'scissors']
    };

    // ----------------------------
    // Game State
    // ----------------------------
    let playerScore = 0;      // Track player's score
    let computerScore = 0;    // Track computer's score

    // ----------------------------
    // DOM Elements
    // ----------------------------
    const playerScoreDisplay = document.getElementById("player-score");  // Player score element
    const computerScoreDisplay = document.getElementById("computer-score");  // Computer score element
    const resultDisplay = document.getElementById("result");  // Display round/game results
    const startButton = document.getElementById("start");  // Start/Restart button
    const optionButtons = document.querySelectorAll(".options button");  // Option buttons

    // Disable option buttons initially until game starts
    disableOptions();

    // ----------------------------
    // Functions
    // ----------------------------

    // Function to play a single round
    function playRound(playerSelection) {
        // Randomly select computer's choice
        const computerSelection = options[Math.floor(Math.random() * options.length)];

        // Check for tie
        if (playerSelection === computerSelection) {
            resultDisplay.textContent = `Tie! You both chose ${playerSelection}.`;
            return;
        }

        // Check if player wins
        if (winsAgainst[playerSelection].includes(computerSelection)) {
            playerScore++;
            updateScores();
            resultDisplay.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        } else {
            // If not a tie or player win, computer wins
            computerScore++;
            updateScores();
            resultDisplay.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
        }

        // Check if the game is over
        if (playerScore === WINNING_SCORE) {
            resultDisplay.textContent = "🎉 You won the game!";
            disableOptions();
        } else if (computerScore === WINNING_SCORE) {
            resultDisplay.textContent = "💀 You lost the game!";
            disableOptions();
        }
    }

    // Function to update score displays
    function updateScores() {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    // Function to disable option buttons
    function disableOptions() {
        optionButtons.forEach(btn => btn.disabled = true);
    }

    // Function to enable option buttons
    function enableOptions() {
        optionButtons.forEach(btn => btn.disabled = false);
    }

    // Function to reset the game state
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

    // Start or Restart the game
    startButton.addEventListener("click", () => {
        startButton.textContent = "Restart"; // Optional: change button text
        resetGame();
    });

    // Add click event listeners to all option buttons
    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            playRound(button.id);  // Play round with the clicked option
        });
    });

});

// ----------------------------
// Feedback Form
// ----------------------------

// Grab the feedback form element
const form = document.getElementById('booking-form');

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission
    const container = form.parentElement;
    // Replace form with a thank you message
    container.innerHTML = '<p style="font-size:1.2rem; padding:1em; text-align:center; color:white; font-weight:bold;">Thanks! For the feedback!</p>';
});




