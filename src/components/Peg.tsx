import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { movePeg, setNotice, nextPlayer, rollDie } from '../store/actions';
import { getWinner, hasWinner, isHomePeg, isStartOccupiedByCurrentPlayer, isStartOccupiedByOtherPlayer, isOwnPeg, getPegMetaOfOccupiedHomeField } from '../utils/';
import './Peg.scss';

interface PegProps {
	id: number;
	player: string;
	yellow?: number;
	green?: number;
	red?: number;
	blue?: number;
}

const Peg = ( props: PegProps ) => {
	const dispatch = useDispatch();
	const die = useSelector( ( state: any ) => state.die );
	const pegs = useSelector( ( state: any ) => state.pegs );
	const currentPlayer = useSelector( ( state: any ) => state.currentPlayer );
	const { id, player, yellow, green, red, blue } = props;

	const handleClick = ( event: any ) => {
		const player = event.target.dataset.player;
		const yellow = event.target.dataset.yellow;
		const green = event.target.dataset.green;
		const red = event.target.dataset.red;
		const blue = event.target.dataset.blue;
		const peg = event.target.dataset.peg;
		const newPegs = JSON.parse( JSON.stringify( pegs ) );

		if ( hasWinner( pegs ) ) {
			const winner = getWinner( pegs );
			return dispatch(
				setNotice( {
					type: 'success',
					message: `${ winner } has won the game!`,
				} )
			);
		}

		if ( ! isOwnPeg( { player, currentPlayer } ) ) {
			return dispatch(
				setNotice( {
					type: 'error',
					message: 'This is not your peg!',
				} )
			);
		}

		if ( die !== 6 && isHomePeg( pegs[ peg ] ) ) {
			return dispatch(
				setNotice( {
					type: 'error',
					message: 'You can only move to the home field with a 6!',
				} )
			);
		}

		if ( die === 6 && isHomePeg( pegs[ peg ] ) && isStartOccupiedByCurrentPlayer( { currentPlayer, pegs } ) ) {
			return dispatch(
				setNotice( {
					type: 'error',
					message: 'There is already a peg on the start field!',
				} )
			);
		}

		if ( die === 6 && isHomePeg( pegs[ peg ] ) && ! isStartOccupiedByCurrentPlayer( { currentPlayer, pegs } ) ) {
			switch ( player ) {
				case 'yellow':
					newPegs[ peg ].field.yellow = 1;
					newPegs[ peg ].field.state = 'field';
					break;
				case 'green':
					newPegs[ peg ].field.green = 1;
					newPegs[ peg ].field.state = 'field';
					break;
				case 'red':
					newPegs[ peg ].field.red = 1;
					newPegs[ peg ].field.state = 'field';
					break;
				case 'blue':
					newPegs[ peg ].field.blue = 1;
					newPegs[ peg ].field.state = 'field';
					break;
			}

			if ( isStartOccupiedByOtherPlayer( { currentPlayer, pegs } ) ) {
				// Find out which peg is on the start field and move it back to the home field.
				const meta = getPegMetaOfOccupiedHomeField( { currentPlayer, pegs } );
				switch ( meta?.color ) {
					case 'yellow':
						newPegs[ meta?.id - 1 ].field.yellow = 0;
						break;
					case 'green':
						newPegs[ meta?.id - 1 ].field.green = 0;
						break;
					case 'red':
						newPegs[ meta?.id - 1 ].field.red = 0;
						break;
					case 'blue':
						newPegs[ meta?.id - 1 ].field.blue = 0;
						break;
				}
			}

			dispatch( movePeg( { pegs: newPegs } ) );
			dispatch(
				setNotice( {
					type: 'success',
					message: 'Moving this peg to the board!',
				} )
			);
			dispatch( nextPlayer( { currentPlayer } ) );
			dispatch( rollDie() );

			return;
		}

		// If teh target field is occupied by the same peg, show error.
		// If the target field is occupied by another peg, hit the other peg back to the home field.

		switch ( player ) {
			case 'yellow':
				newPegs[ peg ].field.yellow += die;
				if ( newPegs[ peg ].field.yellow > 40 ) {
					newPegs[ peg ].field.yellow.state = 'home';
				}
				break;
			case 'green':
				newPegs[ peg ].field.green += die;
				if ( newPegs[ peg ].field.green > 40 ) {
					newPegs[ peg ].field.green.state = 'home';
				}
				break;
			case 'red':
				newPegs[ peg ].field.red += die;
				if ( newPegs[ peg ].field.red > 40 ) {
					newPegs[ peg ].field.red.state = 'home';
				}
				break;
			case 'blue':
				newPegs[ peg ].field.blue += die;
				if ( newPegs[ peg ].field.blue > 40 ) {
					newPegs[ peg ].field.blue.state = 'home';
				}
				break;
		}

		dispatch( movePeg( { pegs: newPegs } ) );
		dispatch(
			setNotice( {
				type: 'success',
				message: '... something default ...',
			} )
		);
		dispatch( nextPlayer( { currentPlayer } ) );
		dispatch( rollDie() );

		return;
	};

	return (
		<div
			className={ classnames( 'peg', player ) }
			key={ id }
			data-peg={ id }
			data-player={ player }
			data-yellow={ yellow }
			data-green={ green }
			data-red={ red }
			data-blue={ blue }
			onClick={ handleClick }
		></div>
	);
};

export default Peg;
