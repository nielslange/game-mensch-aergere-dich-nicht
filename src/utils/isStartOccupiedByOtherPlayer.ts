const isStartOccupiedByOtherPlayer = ( { currentPlayer, pegs }: { currentPlayer: string; pegs: any } ) => {
	switch ( currentPlayer ) {
		case 'yellow':
			return pegs.filter( ( peg: any ) => peg.field.blue === 11 || peg.field.red === 21 || peg.field.green === 31 );
		case 'green':
			return pegs.filter( ( peg: any ) => peg.field.yellow === 11 || peg.field.blue === 21 || peg.field.red === 31 );
		case 'red':
			return pegs.filter( ( peg: any ) => peg.field.green === 11 || peg.field.yellow === 21 || peg.field.blue === 31 );
		case 'blue':
			return pegs.filter( ( peg: any ) => peg.field.red === 11 || peg.field.green === 21 || peg.field.yellow === 31 );
	}
};

export default isStartOccupiedByOtherPlayer;
