import TYPES from './action-types';
import { Player } from './state';
const { CLEAR_NOTICE, MOVE_PEG, NEXT_PLAYER, RESET_STATE, ROLL_DIE, SET_NOTICE } = TYPES;

export const resetGame = () => {
	return { type: RESET_STATE };
};

export const rollDie = () => {
	// const die = Math.floor( Math.random() * 6 ) + 1;
	const die = 1;

	return { type: ROLL_DIE, die };
};

export const clearNotice = () => {
	return { type: CLEAR_NOTICE };
};

export const setNotice = ( notice: any ) => {
	return { type: SET_NOTICE, notice };
};

export const nextPlayer = ( { currentPlayer }: { currentPlayer: Player } ) => {
	const players = [ 'yellow', 'green', 'red', 'blue' ];
	const currentIndex = players.indexOf( currentPlayer );
	const nextIndex = ( currentIndex + 1 ) % players.length;
	const nextPlayer = players[ nextIndex ];
	return { type: NEXT_PLAYER, player: nextPlayer };
};

export const movePeg = ( { pegs }: { pegs: any } ) => {
	return { type: MOVE_PEG, pegs };
};
