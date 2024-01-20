const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const scoreStatus = document.querySelector("#scoreStatus");

document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before attaching event listeners

  const audio = document.getElementById("gameAudio");
  const muteButton = document.getElementById("muteButton");

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

// Win Conditions,
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let roundsPlayed = 0;
const roundsNeededToWin = 5;
let gameOver = false;
let scores = { X: 0, O: 0 };

initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  scoreStatus.textContent = `SCORE: Home: ${scores.X} | Away: ${scores.O}`;
  running = true;
  roundsPlayed = 0;
  gameOver = false;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  if (gameOver) {
    return;
  }

  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    scores[currentPlayer]++;
    statusText.textContent = `${currentPlayer} wins Round ${roundsPlayed + 1}!`;

    // Update score display
    scoreStatus.textContent = `SCORE: Home: ${scores.X} | Away: ${scores.O}`;

    // Check if a player has won the overall game
    if (++roundsPlayed >= roundsNeededToWin) {
      statusText.textContent = `${
        scores.X > scores.O ? "X" : "O"
      } wins the game!`;
      gameOver = true;
    } else {
      restartRound();
    }
  } else if (!options.includes("")) {
    statusText.textContent = `Draw in Round ${roundsPlayed + 1}!`;

    // Check if a player has won the overall game
    if (++roundsPlayed >= roundsNeededToWin) {
      statusText.textContent = `It's a tie! No one wins the game.`;
      gameOver = true;
    } else {
      restartRound();
    }
  } else {
    changePlayer();
  }
}

function restartRound() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn for Round ${
    roundsPlayed + 1
  }`;
  scoreStatus.textContent = `SCORE: Home: ${scores.X} | Away: ${scores.O}`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}

function restartGame() {
  initializeGame();
  cells.forEach((cell) => (cell.textContent = ""));
}

function mute() {
  addEventListener("click", muteButton);
}
