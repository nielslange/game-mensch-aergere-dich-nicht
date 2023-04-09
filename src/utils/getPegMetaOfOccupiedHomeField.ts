const getPegMetaOfOccupiedHomeField = ( { currentPlayer, pegs }: { currentPlayer: string; pegs: any } ) => {
	let occupyingPeg;

	switch ( currentPlayer ) {
		case 'yellow':
			occupyingPeg = pegs.find(
				( peg: any ) =>
					peg.color !== currentPlayer &&
					( peg.field.blue === 11 || peg.field.red === 21 || peg.field.green === 31 )
			);
			break;
		case 'green':
			occupyingPeg = pegs.find(
				( peg: any ) =>
					peg.color !== currentPlayer &&
					( peg.field.yellow === 11 || peg.field.blue === 21 || peg.field.red === 31 )
			);
			break;
		case 'red':
			occupyingPeg = pegs.find(
				( peg: any ) =>
					peg.color !== currentPlayer &&
					( peg.field.green === 11 || peg.field.yellow === 21 || peg.field.blue === 31 )
			);
			break;
		case 'blue':
			occupyingPeg = pegs.find(
				( peg: any ) =>
					peg.color !== currentPlayer &&
					( peg.field.red === 11 || peg.field.green === 21 || peg.field.yellow === 31 )
			);
			break;
	}

	return occupyingPeg ? { id: occupyingPeg.id, color: occupyingPeg.player } : null;
};

export default getPegMetaOfOccupiedHomeField;
