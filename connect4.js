// 
// Connect 4
// 
const inquirer = require("inquirer");


class Game {
    constructor() {
        // !This game board will be the production
        // this.board = {
        //     1: Array(7).fill(null),
        //     2: Array(7).fill(null),
        //     3: Array(7).fill(null),
        //     4: Array(7).fill(null),
        //     5: Array(7).fill(null),
        //     6: Array(7).fill(null),
        //     7: Array(7).fill(null),
        // };
    };

};
const game = new Game();

inquirer
    .prompt([{
        type: "list",
        name: "columnChoice",
        choices: [1, 2, 3, 4, 5, 6, 7],
        message: "Pick the column to drop piece",
    }])
    .then(choice => {
        console.log(choice.columnChoice);
    })