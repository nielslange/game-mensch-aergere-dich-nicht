const isStartOccupiedByCurrentPlayer = ( { currentPlayer, pegs }: { currentPlayer: string; pegs: any } ) => {
	const isPegOnStart = ( color: string ) => Boolean( pegs.filter( ( peg: any ) => peg.field[ color ] === 1 ).length );

	return isPegOnStart( currentPlayer );
};

export default isStartOccupiedByCurrentPlayer;
