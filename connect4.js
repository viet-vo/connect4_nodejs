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
            Array(6).fill(0),
            Array(6).fill(0),
            Array(6).fill(0),
            Array(6).fill(0),
            Array(6).fill(0),
            [1, 1, 1, 0, 0, 0,],
        ];
    };

};
var game = new Game();

inquirer
    .prompt([{
        type: "list",
        name: "columnChoice",
        choices: [1, 2, 3, 4, 5, 6, 7],
        message: "Pick the column to drop piece",
    }])
    .then(choice => {
        pickedColumn = choice.columnChoice;
        console.log(game.board);
    })