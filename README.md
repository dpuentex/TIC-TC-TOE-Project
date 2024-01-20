# TIKI TACA TOE
This is a tic-tac-toe game
## About game 
This is a Tic Tac Toe gmae with a Football (soccer) theme.
"TIKI TACA" is a play style in football that demonstrates a possession-based offense with multiple passes with the idea that one player can't take more than 3-4 touches, unless in the offensive 3rd of the field. 
## Future Fixes 
Need to add a loop that resets the score board back to 0 - 0 when I hit reset.
## Future details/features
Some details that will be
Fans in stadium
GIF players running around the field
Sound effects within an actual match such as whistles, boos, and cheers.
Animated scoreboard.
## Languages used.
The languages used in this game are, HTML, CSS, and JavaScript.
## HTML
This repository contains the HTML structure for a simple game called "TIKI TACA TOE." The web page includes elements for displaying the game title, score status, game cells, and buttons for restarting and muting. The styling is handled by an external CSS file, and game logic is expected to be implemented in a linked JavaScript file named script.js. The background music for the game is included using an audio element.
## CSS 
CSS for TIKI TACA TOE Game

This repository includes the CSS styling for a TIKI TACA TOE game web page. Key features include:

Body Styling:

The body is centered both vertically and horizontally using Flexbox.
The background is set to green.
The position is fixed.
Game Background Styling:

Utilizes a soccer field image as the background, covering 90% of the width and height.
Fixed minimum width and height to ensure a responsive layout.
Game Container Styling:

Positioned at the center with padding and specific width.
Styled with a specific font family and text alignment.
Cell Container Styling:

Utilizes a grid layout for the game cells with a specified width.
Cell Styling:

Each game cell is styled with a white border, shadow, and green background.
Heading Styling:

The game title (h1) has a black background, white text, and a white border.
Status Styling:

Score status (#scoreStatus) and status text (#statusText) have a black background, red text, and a white border.
Text is set not to wrap and overflow is hidden with an ellipsis.
Button Styling:

Buttons have red text, a black background, and a white border.
On hover, the buttons move up by 5 pixels and change the background and border colors.
A transition effect is applied for a smooth transformation.
Media Query:

Adjustments for smaller screens with a max-width of 900px.
Font size, padding, and width are adjusted for better responsiveness.
## JS
JavaScript for TIKI TACA TOE Game

This repository includes the JavaScript logic for a TIKI TACA TOE game web page. Key features include:

Initialization:

Sets up the game by attaching click event listeners to cells and the restart button.
Initializes game state variables such as options, currentPlayer, and scores.
Mute Functionality:

Provides a mute button with functionality to toggle audio muting.
Updates the button text to reflect the current mute state.
Gameplay:

Defines win conditions and game variables.
Manages cell clicks, updates the game board, and checks for a winner.
Handles player turns and switches players.
Tracks scores and rounds played.
Game Over and Restart:

Handles game over conditions declares winners, and updates the score.
It allows restarting rounds and the entire game.
Overall Flow:

Manages the overall flow of the game, ensuring a smooth and interactive user experience.
