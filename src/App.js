import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import GameInfo from './components/GameInfo/GameInfo';
import calcWinner from './utils/gameLogic';

function App() {
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [isXNext, setIsXNext] = useState(true)
	const [gameOver, setGameOver] = useState(false)
	const [winner, setWinner] = useState(null)
	const [winPositions, setWinPositions] = useState(null)

	function clickHandler(index) {
		const newSquares = squares.slice()

		if (newSquares[index] === null) {
			newSquares[index] = isXNext ? 'X' : 'O';
			setSquares(newSquares)
			setIsXNext(!isXNext);
		}
	}

	function restartGame() {
		setSquares(Array(9).fill(null))
		setIsXNext(true)
		setGameOver(false)
		setWinner(null)
		setWinPositions(null)
	}

	useEffect(() => {
		const [winPositions, currentWinner] = calcWinner(squares)
		setWinner(currentWinner)

		if (currentWinner !== null) {
			setGameOver(true)
			setWinPositions(winPositions)
		}
	}, [squares])

	return (
		<div className="App">
			<GameInfo gameOver={gameOver} winner={winner} nowMoving={isXNext ? 'X' : 'O'} onRestart={restartGame} />
			<Board gameOver={gameOver} highlightSquares={winPositions} squares={squares} onClick={clickHandler} />
		</div>
	);
}

export default App;
