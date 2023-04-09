const isFiledOccupiedByCurrentPlayer = ( { currentPlayer, pegs }: { currentPlayer: string; pegs: any } ) => {
	switch ( currentPlayer ) {
		case 'yellow':
			return pegs.filter( ( peg: any ) => peg.field.yellow === 1 ).length;
		case 'green':
			return pegs.filter( ( peg: any ) => peg.field.green === 1 ).length;
		case 'red':
			return pegs.filter( ( peg: any ) => peg.field.red === 1 ).length;
		case 'blue':
			return pegs.filter( ( peg: any ) => peg.field.blue === 1 ).length;
	}
};

export default isFiledOccupiedByCurrentPlayer;
