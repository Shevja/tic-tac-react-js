import React from "react";
import styles from './GameInfo.module.css'

function GameInfo({ gameOver, winner, nowMoving, onRestart }) {

    return (
        <div className={styles.gameinfo}>
            {
                gameOver ? (
                    <>
                        {
                            winner === 'draw' ? (
                                <span>Ничья</span>
                            ) : (
                                <span>Победитель: {winner}</span>
                            )
                        }
                        <button onClick={onRestart}>Еще раз</button>
                    </>
                ) : (
                    <span>Сейчас ходит: {nowMoving}</span>
                )
            }
        </div>
    )
}

export default GameInfo