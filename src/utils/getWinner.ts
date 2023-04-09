interface pegsAtHomeInterface {
	[ key: string ]: number;
}

const getWinner = ( pegs: any ) => {
	const pegsAtHome: pegsAtHomeInterface = {
		yellow: 0,
		green: 0,
		red: 0,
		blue: 0,
	};

	pegs.forEach( ( peg: any ) => {
		if ( peg.field.state === 'home' ) {
			pegsAtHome[ peg.player ]++;
		}
	} );

	for ( const color in pegsAtHome ) {
		if ( pegsAtHome[ color ] === 4 ) {
			return color.charAt( 0 ).toUpperCase() + color.slice( 1 );
		}
	}
};

export default getWinner;
