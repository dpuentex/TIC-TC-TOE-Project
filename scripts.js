// Declare variables to store DOM elements
var cells = document.querySelectorAll(".cell");
var statusText = document.querySelector("#statusText");
var restartBtn = document.querySelector("#restartBtn");
var scoreStatus = document.querySelector("#scoreStatus");
// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching event listeners
    // Get audio and mute button elements
    var audio = document.getElementById("gameAudio");
    var muteButton = document.getElementById("muteButton");
    // Add click event listener to the mute button
    muteButton.addEventListener("click", toggleMute);
    // Function to toggle the mute state of the audio
    function toggleMute() {
        audio.muted = !audio.muted; // Toggle the muted property
        updateMuteButtonText(); // Update the text on the mute button
    }
    // Function to update the text on the mute button based on the audio's muted state
    function updateMuteButtonText() {
        muteButton.textContent = audio.muted ? "UNMUTE" : "MUTE";
    }
});
// Win Conditions
var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// Game state variables
var options = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var running = false;
var roundsPlayed = 0;
var roundsNeededToWin = 5;
var gameOver = false;
var scores = { X: 0, O: 0 };
// Initialize the game
initializeGame();
// Function to initialize the game
function initializeGame() {
    cells.forEach(function (cell) { return cell.addEventListener("click", cellClicked); });
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = "".concat(currentPlayer, "'s turn click on box");
    scoreStatus.textContent = "SCORE: Home: ".concat(scores.X, " | Away: ").concat(scores.O);
    running = true;
    roundsPlayed = 0;
    gameOver = false;
}
// Function to handle cell clicks
function cellClicked() {
    var cellIndex = Number(this.getAttribute("cellIndex"));
    if (options[cellIndex] !== "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
// Function to update a cell with the current player's symbol
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
// Function to switch to the next player
function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = "".concat(currentPlayer, "'s turn click on box");
}
// Function to check if there's a winner or a draw
function checkWinner() {
    if (gameOver) {
        return;
    }
    var roundWon = false;
    for (var i = 0; i < winConditions.length; i++) {
        var condition = winConditions[i];
        var cellA = options[condition[0]];
        var cellB = options[condition[1]];
        var cellC = options[condition[2]];
        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        scores[currentPlayer]++;
        statusText.textContent = "".concat(currentPlayer, " wins Round ").concat(roundsPlayed + 1, "!");
        // Update score display
        scoreStatus.textContent = "SCORE: Home: ".concat(scores.X, " | Away: ").concat(scores.O);
        // Check if a player has won the overall game
        if (++roundsPlayed >= roundsNeededToWin) {
            statusText.textContent = "".concat(scores.X > scores.O ? "X" : "O", " wins the game!");
            gameOver = true;
        }
        else {
            restartRound();
        }
    }
    else if (!options.includes("")) {
        statusText.textContent = "Draw in Round ".concat(roundsPlayed + 1, "!");
        // Check if a player has won the overall game
        if (++roundsPlayed >= roundsNeededToWin) {
            statusText.textContent = "It's a tie! No one wins the game.";
            gameOver = true;
        }
        else {
            restartRound();
        }
    }
    else {
        changePlayer();
    }
}
// Function to restart the current round
function restartRound() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = "".concat(currentPlayer, "'s turn for Round ").concat(roundsPlayed + 1);
    scoreStatus.textContent = "SCORE: Home: ".concat(scores.X, " | Away: ").concat(scores.O);
    cells.forEach(function (cell) { return (cell.textContent = ""); });
    running = true;
}
// Function to restart the entire game
function restartGame() {
    initializeGame();
    cells.forEach(function (cell) { return (cell.textContent = ""); });
}
// Function to mute the audio
function mute() {
    var muteButton = document.getElementById("muteButton");
    muteButton.addEventListener("click", function () {
        var audio = document.getElementById("gameAudio");
        audio.muted = !audio.muted;
        muteButton.textContent = audio.muted ? "UNMUTE" : "MUTE";
    });
}
