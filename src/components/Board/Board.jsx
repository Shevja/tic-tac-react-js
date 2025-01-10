import React from "react";
import Square from "../Square/Square"
import styles from './Board.module.css'

function Board({ squares, onClick }) {
    const gridSize = Math.sqrt(squares.length)

    return (
        <div className={styles.board}
            style={{
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                gridTemplateRows: `repeat(${gridSize}, 1fr)`
            }}
        >
            {squares.map((value, index) => (
                <Square key={index} value={value} onClick={() => onClick(index)} />
            ))}
        </div>
    );
}

export default Board;