interface isFieldOccupiedByCurrentPlayerProps {
	currentPlayer: string;
	pegs: any;
	peg: number;
	die: number;
}

const isFieldOccupiedByCurrentPlayer = ( {
	currentPlayer,
	pegs,
	peg,
	die,
}: isFieldOccupiedByCurrentPlayerProps ) => {
	const targetFieldForColor = ( color: string ) => {
		const targetField = pegs[ peg ].field[ color ] + die;
		return Boolean(
			pegs.filter( ( peg: any ) => peg.field[ color ] === targetField )
				.length
		);
	};

	switch ( currentPlayer ) {
		case 'yellow':
			return targetFieldForColor( 'yellow' );
		case 'green':
			return targetFieldForColor( 'green' );
		case 'red':
			return targetFieldForColor( 'red' );
		case 'blue':
			return targetFieldForColor( 'blue' );
	}
};

export default isFieldOccupiedByCurrentPlayer;
