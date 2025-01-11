const winIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function calcWinner(squares) {
    for (let [a, b, c] of winIndexes) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [[a, b, c], squares[a]];
        }
    }

    if (squares.every((square) => square !== null)) {
        return [null, 'draw']
    }

    return [null, null]
}

export default calcWinner