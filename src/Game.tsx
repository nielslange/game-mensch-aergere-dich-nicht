import { Provider } from 'react-redux';
import store from './store/store';
import Board from './components/Board';
import Die from './components/Die';
import Players from './components/Players';
import Notice from './components/Notice';
import './Game.scss';

const Game = () => {
	return (
		<div className="game">
			<Provider store={ store }>
				<div>
					<h1>Mensch ärgere dich nicht</h1>
					<Board />
				</div>
				<div>
					<Die />
					<Players />
					<Notice />
				</div>
			</Provider>
		</div>
	);
};

export default Game;
