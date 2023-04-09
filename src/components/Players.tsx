import { useSelector, useDispatch } from 'react-redux';
import { rollDie, nextPlayer, clearNotice, setNotice } from '../store/actions';
import { getWinner, hasWinner } from '../utils/';

const Players = () => {
	const dispatch = useDispatch();
	const currentPlayer = useSelector( ( state: any ) => state.currentPlayer );
	const pegs = useSelector( ( state: any ) => state.pegs );

	const handleClick = () => {
		if ( hasWinner( pegs ) ) {
			const winner = getWinner( pegs );
			return dispatch(
				setNotice( {
					type: 'success',
					message: `${ winner } has won the game!`,
				} )
			);
		}

		dispatch( nextPlayer( { currentPlayer } ) );
		dispatch( clearNotice() );
		dispatch( rollDie() );
	};

	return (
		<div>
			<h2>Player.tsx</h2>
			<div>Current player: { currentPlayer }</div>
			<br />
			<button onClick={ handleClick }>Next player</button>
		</div>
	);
};

export default Players;
