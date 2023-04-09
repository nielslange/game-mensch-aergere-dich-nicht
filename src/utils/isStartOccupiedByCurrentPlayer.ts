interface isStartOccupiedByCurrentPlayerProps {
	currentPlayer: string;
	pegs: any;
}

const isStartOccupiedByCurrentPlayer = ( { currentPlayer, pegs }: isStartOccupiedByCurrentPlayerProps ) => {
	const isPegOnStart = ( color: string ) => Boolean( pegs.filter( ( peg: any ) => peg.field[ color ] === 1 ).length );

	return isPegOnStart( currentPlayer );
};

export default isStartOccupiedByCurrentPlayer;
