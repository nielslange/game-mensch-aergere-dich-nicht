const isStartOccupiedByCurrentPlayer = ( { currentPlayer, pegs }: { currentPlayer: string; pegs: any } ) => {
	switch ( currentPlayer ) {
		case 'yellow':
			return pegs.filter( ( peg: any ) => peg.field.yellow === 1 );
		case 'green':
			return pegs.filter( ( peg: any ) => peg.field.green === 1 );
		case 'red':
			return pegs.filter( ( peg: any ) => peg.field.red === 1 );
		case 'blue':
			return pegs.filter( ( peg: any ) => peg.field.blue === 1 );
	}
};

export default isStartOccupiedByCurrentPlayer;
