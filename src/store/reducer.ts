import { initialState } from './state';
import TYPES from './action-types';
const { ROLL_DIE, CLEAR_NOTICE, MOVE_PEG, NEXT_PLAYER, RESET_STATE, SET_NOTICE } = TYPES;

const reducer = ( state = initialState, action: any ) => {
	switch ( action.type ) {
		case RESET_STATE:
			return initialState;

		case ROLL_DIE:
			return { ...state, die: action.die };

		case CLEAR_NOTICE:
			return {
				...state,
				notice: {},
			};

		case SET_NOTICE:
			return {
				...state,
				notice: {
					message: action.notice.message,
					type: action.notice.type,
				},
			};

		case NEXT_PLAYER:
			return { ...state, currentPlayer: action.player };

		case MOVE_PEG:
			return { ...state, pegs: action.pegs };

		default:
			return state;
	}
};

export default reducer;
