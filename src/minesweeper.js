
// LOGIC

export const TILES_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked'
}

export function createBoard(boardSize, NumberOfMines) {
    const board = []
    const minePositions = getMinePositions(boardSize, NumberOfMines)
    console.log(minePositions)
    for(let x = 0; x < boardSize; x++) {
        const row = []
        for(let y = 0; y < boardSize; y++) {
            const element = document.createElement('div')
            element.dataset.status = TILES_STATUSES.HIDDEN

            const tile = {
                element,
                x,
                y,
                mine: minePositions.some(positionMatch.bind(null , {x, y})),
                get status() {
                    return this.element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                }
            } 

            row.push(tile)
        }
        board.push(row)
    }

    return board
}

export function markTile(tile) {
    if(tile.status !== TILES_STATUSES.HIDDEN && tile.status !== TILES_STATUES.MARKED) {
        return
    }

    if(tile.status === TILES_STATUSES.MARKED) {
        tile.status = TILES_STATUSES.HIDDEN
    } else {
        tile.status = TILES_STATUSES.MARKED
    }
}

function getMinePositions(boardSize, NumberOfMines){
    const positions = []

    while(positions.length < NumberOfMines) {
        const position = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize)
        }
        if(!positions.some(p => positionMatch(p, position))){
            positions.push(position)
        }
    }

        return positions
}

function positionMatch(a, b){
    return a.x === b.x && a.y === b.y
}

function randomNumber(size){
    return Math.floor(Math.random() * size)
}