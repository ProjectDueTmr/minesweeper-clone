
// LOGIC

const TILES_STATUES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked'
}

export function createBoard(boardSize, NumberOfMines) {
    const board = []

    for(let x = 0; x < boardSize; x++) {
        const row = []
        for(let y = 0; y < boardSize; y++) {
            const element = document.createElement('div')
            element.dataset.status = TILES_STATUES.HIDDEN

            const tile = {
                element,
                x,
                y
            } 

            row.push(tile)
        }
        board.push(row)
    }

    return board
}