// DISPLAY/UI


import { createBoard} from "./minesweeper";
import { test2 } from "./test3";
import "./style.css"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 2

const board = (createBoard(BOARD_SIZE, NUMBER_OF_MINES))
const boardElement = document.querySelector('.board')
console.log(board)
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})
boardElement.style.setProperty('--size', BOARD_SIZE)

// 1. Populate a board with tiles/mines
// 2. left click on tiles
    // a. reveal tiles 
// 3. right click one tiles
    // a. mark tiles
// 4. check for win/lose 

console.log(test1);
console.log(test2)