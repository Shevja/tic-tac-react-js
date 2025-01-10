import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import GameInfo from './components/GameInfo/GameInfo';

function App() {
	const [ squares, setSquares ] = useState(Array(9).fill(null))
	const [ isXNext, setIsXNext ] = useState(true)

	function clickHandler(index) {
		const newSquares = squares.slice()
		newSquares[index] = isXNext ? 'X' : 'O';

		setSquares(newSquares)
		setIsXNext(!isXNext);
	}

	return (
		<div className="App">
			{/* <GameInfo /> */}
			<Board squares={squares} onClick={clickHandler} />
		</div>
	);
}

export default App;
