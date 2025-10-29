// This ensures that JavaScript can access all elements safely
document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Game options
    // ----------------------------
    const options = ["rock", "paper", "scissors", "lizard", "spock"]; // Choices available for the player and computer

    // ----------------------------
    // Game scores
    // ----------------------------
    let playerScore = 0; // Player's score
    let computerScore = 0; // Computer's score

    // ----------------------------
    // Get DOM elements
    // ----------------------------
    const playerScoreDisplay = document.getElementById("player-score"); // Shows player's score
    const computerScoreDisplay = document.getElementById("computer-score"); // Shows computer's score
    const resultDisplay = document.getElementById("result"); // Shows result of each round
    const startButton = document.getElementById("start"); // Start game button
    const playAgainButton = document.getElementById("play-again"); // Play again button
    const optionButtons = document.querySelectorAll(".options button"); // All option buttons (rock, paper, etc.)

    // Hide the "Play Again" button at the start
    playAgainButton.style.display = "none";

    // ----------------------------
    // Function: Play a round
    // ----------------------------
    // playerSelection: the player's choice (rock/paper/etc.)
    // computerSelection: the computer's choice
    function playRound(playerSelection, computerSelection) {
        const playerIndex = options.indexOf(playerSelection); // Get index of player's choice
        const computerIndex = options.indexOf(computerSelection); // Get index of computer's choice

        // Calculate circular difference to determine winner
        // Result mapping:
        // 0 = tie, 1/3 = player wins, 2/4 = computer wins
        const resultIndex = (playerIndex - computerIndex + 5) % 5;

        if (resultIndex === 0) {
            return "Tie!"; // Same choice
        } else if (resultIndex === 1 || resultIndex === 3) {
            playerScore++; // Player wins this round
            updateScores(); // Update scoreboard
            if (playerScore === 15) { // Check if player reached 15 points
                endGame("You win!"); // End game if player wins
            }
            return "You win this round!";
        } else {
            computerScore++; // Computer wins this round
            updateScores(); // Update scoreboard
            if (computerScore === 15) { // Check if computer reached 15 points
                endGame("You lose!"); // End game if computer wins
            }
            return "Computer wins this round!";
        }
    }

    // ----------------------------
    // Function: Update the scoreboard
    // ----------------------------
    function updateScores() {
        playerScoreDisplay.textContent = playerScore; // Show player's score
        computerScoreDisplay.textContent = computerScore; // Show computer's score
    }

    // ----------------------------
    // Function: Computer randomly selects an option
    // ----------------------------
    function computerPlay() {
        return options[Math.floor(Math.random() * options.length)]; // Random choice from options array
    }

    // ----------------------------
    // Function: Disable all option buttons
    // ----------------------------
    function disableOptions() {
        optionButtons.forEach(button => button.disabled = true); // Prevent clicking after game ends
    }

    // ----------------------------
    // Function: Enable all option buttons
    // ----------------------------
    function enableOptions() {
        optionButtons.forEach(button => button.disabled = false); // Allow clicking when game starts/resets
    }

    // ----------------------------
    // Function: End the game
    // ----------------------------
    function endGame(message) {
        resultDisplay.textContent = message; // Display win/lose message
        disableOptions(); // Stop player from clicking options
        playAgainButton.style.display = "inline-block"; // Show "Play Again" button
    }

    // ----------------------------
    // Function: Reset the game
    // ----------------------------
    function resetGame() {
        playerScore = 0; // Reset player score
        computerScore = 0; // Reset computer score
        updateScores(); // Update scoreboard
        resultDisplay.textContent = ""; // Clear previous result
        enableOptions(); // Enable option buttons
        playAgainButton.style.display = "none"; // Hide "Play Again" button
    }

    // ----------------------------
    // Event listeners
    // ----------------------------

    // Start button click: resets the game
    startButton.addEventListener("click", () => {
        resetGame();
    });

    // Play Again button click: resets the game after win/lose
    playAgainButton.addEventListener("click", () => {
        resetGame();
    });

    // Option buttons click: plays a round when player chooses an option
    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const playerSelection = button.id; // Get the player's choice
            const computerSelection = computerPlay(); // Get computer's choice
            const result = playRound(playerSelection, computerSelection); // Play a round
            resultDisplay.textContent = result; // Display round result
        });
    });

});

