// Declare variables to store DOM elements
const cells: NodeListOf<HTMLDivElement> = document.querySelectorAll(".cell");
const statusText: HTMLElement = document.querySelector(
  "#statusText"
) as HTMLElement;
const restartBtn: HTMLElement = document.querySelector(
  "#restartBtn"
) as HTMLElement;
const scoreStatus: HTMLElement = document.querySelector(
  "#scoreStatus"
) as HTMLElement;

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before attaching event listeners

  // Get audio and mute button elements
  const audio: HTMLAudioElement = document.getElementById(
    "gameAudio"
  ) as HTMLAudioElement;
  const muteButton: HTMLElement = document.getElementById(
    "muteButton"
  ) as HTMLElement;

  // Add click event listener to the mute button
  muteButton.addEventListener("click", toggleMute);

  // Function to toggle the mute state of the audio
  function toggleMute(): void {
    audio.muted = !audio.muted; // Toggle the muted property
    updateMuteButtonText(); // Update the text on the mute button
  }

  // Function to update the text on the mute button based on the audio's muted state
  function updateMuteButtonText(): void {
    muteButton.textContent = audio.muted ? "UNMUTE" : "MUTE";
  }
});

// Win Conditions
const winConditions: number[][] = [
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
let options: string[] = ["", "", "", "", "", "", "", "", ""];
let currentPlayer: string = "X";
let running: boolean = false;
let roundsPlayed: number = 0;
const roundsNeededToWin: number = 5;
let gameOver: boolean = false;
let scores: { X: number; O: number } = { X: 0, O: 0 };

// Initialize the game
initializeGame();

// Function to initialize the game
function initializeGame(): void {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn click on box`;
  scoreStatus.textContent = `SCORE: Home: ${scores.X} | Away: ${scores.O}`;
  running = true;
  roundsPlayed = 0;
  gameOver = false;
}

// Function to handle cell clicks
function cellClicked(this: HTMLElement): void {
  const cellIndex: number = Number(this.getAttribute("cellIndex"));

  if (options[cellIndex] !== "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}

// Function to update a cell with the current player's symbol
function updateCell(cell: HTMLElement, index: number): void {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

// Function to switch to the next player
function changePlayer(): void {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn click on box`;
}

// Function to check if there's a winner or a draw
function checkWinner(): void {
  if (gameOver) {
    return;
  }

  let roundWon: boolean = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition: number[] = winConditions[i];
    const cellA: string = options[condition[0]];
    const cellB: string = options[condition[1]];
    const cellC: string = options[condition[2]];

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

// Function to restart the current round
function restartRound(): void {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn for Round ${
    roundsPlayed + 1
  }`;
  scoreStatus.textContent = `SCORE: Home: ${scores.X} | Away: ${scores.O}`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}

// Function to restart the entire game
function restartGame(): void {
  initializeGame();
  cells.forEach((cell) => (cell.textContent = ""));
}

// Function to mute the audio
function mute(): void {
  const muteButton = document.getElementById("muteButton") as HTMLElement;
  muteButton.addEventListener("click", () => {
    const audio = document.getElementById("gameAudio") as HTMLAudioElement;
    audio.muted = !audio.muted;
    muteButton.textContent = audio.muted ? "UNMUTE" : "MUTE";
  });
}
