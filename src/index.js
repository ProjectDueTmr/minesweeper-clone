// DISPLAY/UI


import { TILES_STATUSES, createBoard, markTile, revealTile} from "./minesweeper";
import { test2 } from "./test3";
import "./style.css"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10

const board = (createBoard(BOARD_SIZE, NUMBER_OF_MINES))
const boardElement = document.querySelector('.board')
const minesLeftText = document.querySelector('[data-mine-count]')


board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        tile.element.addEventListener('click', () => {
            revealTile(board, tile)
        })
        tile.element.addEventListener('contextmenu', e => {
            e.preventDefault()
            markTile(tile)
            listMinesLeft()
        })
    })
})
boardElement.style.setProperty('--size', BOARD_SIZE)
minesLeftText.textContent = NUMBER_OF_MINES

function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILES_STATUSES.MARKED).length
    }, 0)

    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
}
// 4. check for win/lose 
