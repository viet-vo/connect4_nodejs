//
// Connect 4
//
const inquirer = require("inquirer");

class Game {
  constructor() {
    // !This game board will be the production
    // this.board = {
    //     1: Array(6).fill(0),
    //     2: Array(6).fill(0),
    //     3: Array(6).fill(0),
    //     4: Array(6).fill(0),
    //     5: Array(6).fill(0),
    //     6: Array(6).fill(0),
    // };
    this.board = [
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      [1, 1, 1, null, null, null, null]
    ];
  }
  checkWinner() {
    // Check down for winner
    // relevant StackOverflow link
    // https://stackoverflow.com/questions/33181356/connect-four-game-checking-for-wins-js
    // Check with a for loop over each particular position that 4 times
    // Have to check in a format down, right, diagonally right, and diagonally left
  }
}
var game = new Game();
function placeChoice(choice) {
  var x = game.board.length;
  // while (game.board[x - 1] != null) {
    game.board[x - 1][choice - 1] = 1;
  // }
}
inquirer
  .prompt([
    {
      type: "list",
      name: "columnChoice",
      choices: [1, 2, 3, 4, 5, 6, 7],
      message: "Pick the column to drop piece"
    }
  ])
  .then(choice => {
    pickedColumn = choice.columnChoice;
    placeChoice(pickedColumn);
    console.log(game.board);
  });