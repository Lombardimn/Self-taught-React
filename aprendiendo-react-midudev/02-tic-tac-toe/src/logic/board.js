import { WINNER_COMBOS } from "../utils/constants"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if ( 
            boardToCheck[a] && 
            boardToCheck[a] === boardToCheck[b] && 
            boardToCheck[a] === boardToCheck[c]) 
            {
                return boardToCheck[a]
            }
    }
    return null //si no hay ganador
}

export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    return newBoard.every((square) => square !== null)
}
