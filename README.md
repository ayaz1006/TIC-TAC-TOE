<b>TIC-TAC-TOE Game Clone<b>

Game can be viewed at: 

This project is a clone of the classic TIC-TAC-TOE game implemented using JavaScript. The game features a simple user interface where players can click on boxes to place their respective marks, X or O. Below is a summary of the key components and functionalities of the project:

Components:

boxes: Represents the individual cells of the TIC-TAC-TOE grid.
resetBtn: Button to reset the game.
newGameBtn: Button to start a new game.
msgContainer: Container for displaying messages to the players.
msg: Element to display messages such as game outcomes.
Functionality:

Game Logic:
Tracks the current turn of players (player X or player O).
Counts the number of moves to determine if the game ends in a draw.
Defines winning patterns to check for a winner after each move.
Event Listeners:
Adds event listeners to each box for handling player moves.
Listens for clicks on the reset and new game buttons to reset or start a new game.
Game State Management:
Provides functions to reset the game, handle draws, disable/enable boxes, and display the winner.
Winning Conditions:

The game checks for winning conditions by comparing the marks in each winning pattern against predefined win patterns.
If a winning pattern matches, the game declares the corresponding player as the winner.
Draw Handling:

If all boxes are filled and no player has won, the game declares a draw.
User Interface:

Marks each player's moves with different colors (light green for player O and pink for player X).
Displays messages in the message container to notify players of game outcomes.
Reset and New Game:

Provides buttons to reset the current game or start a new game, allowing players to restart the game at any time.
This TIC-TAC-TOE game clone offers a simple yet engaging gaming experience, where players can compete against each other to achieve victory or enjoy a challenging draw.
