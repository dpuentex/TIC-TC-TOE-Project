# TIKI TACA TOE

This is a tic-tac-toe game with a Football (soccer) theme.

## About the Game

This is a Tic Tac Toe game with a football (soccer) theme. "TIKI TACA" refers to a play style in football that demonstrates a possession-based offense with multiple passes, with the idea that one player can't take more than 3-4 touches, unless in the offensive third of the field.

## Demo

You can play the game (COMING SOON)

## Future Fixes

- Add a loop that resets the scoreboard back to 0-0 when the reset button is pressed.

## Future Details/Features

- Fans in the stadium
- GIF players running around the field
- Sound effects from an actual match such as whistles, boos, and cheers
- Animated scoreboard

## Technologies Used

- HTML
- CSS
- JavaScript

## HTML

This repository contains the HTML structure for the TIKI TACA TOE game. The web page includes elements for displaying the game title, score status, game cells, and buttons for restarting and muting. The styling is handled by an external CSS file, and game logic is implemented in a linked JavaScript file named `script.js`. Background music for the game is included using an audio element.

## CSS

### Body Styling

- The body is centered both vertically and horizontally using Flexbox.
- The background is set to green.
- The position is fixed.

### Game Background Styling

- Utilizes a soccer field image as the background, covering 90% of the width and height.
- Fixed minimum width and height to ensure a responsive layout.

### Game Container Styling

- Positioned at the center with padding and specific width.
- Styled with a specific font family and text alignment.

### Cell Container Styling

- Utilizes a grid layout for the game cells with a specified width.

### Cell Styling

- Each game cell is styled with a white border, shadow, and green background.

### Heading Styling

- The game title (h1) has a black background, white text, and a white border.

### Status Styling

- Score status (`#scoreStatus`) and status text (`#statusText`) have a black background, red text, and a white border.
- Text is set not to wrap, and overflow is hidden with an ellipsis.

### Button Styling

- Buttons have red text, a black background, and a white border.
- On hover, the buttons move up by 5 pixels and change the background and border colors.
- A transition effect is applied for a smooth transformation.

### Media Query

- Adjustments for smaller screens with a max-width of 900px.
- Font size, padding, and width are adjusted for better responsiveness.

## JavaScript

This repository includes the JavaScript logic for the TIKI TACA TOE game web page. Key features include:

### Initialization

- Sets up the game by attaching click event listeners to cells and the restart button.
- Initializes game state variables such as options, currentPlayer, and scores.

### Mute Functionality

- Provides a mute button with functionality to toggle audio muting.
- Updates the button text to reflect the current mute state.

### Gameplay

- Defines win conditions and game variables.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/dpuentex/TIC-TC-TOE-Project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TIC-TC-TOE-Project
   ```
3. Open `index.html` in your browser to play the game.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Known Issues

- Add a loop that resets the scoreboard back to 0-0 when the reset button is pressed.

If you encounter any issues, please report them [here](https://github.com/dpuentex/TIC-TC-TOE-Project/issues).

## Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-06-30

### Added

- Initial release of the TIKI TACA TOE game
- Two-player gameplay
- Score tracking
- Game restart functionality
- Mute/unmute audio
