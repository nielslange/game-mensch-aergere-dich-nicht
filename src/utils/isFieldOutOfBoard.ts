interface isFieldOutOfBoardProps {
	currentPlayer: string;
	pegs: any;
	peg: number;
	die: number;
}

const isFieldOutOfBoard = ( { currentPlayer, pegs, peg, die }: isFieldOutOfBoardProps ) => {
	return Boolean( pegs[ peg ].field[ currentPlayer ] + die > 44 );
};

export default isFieldOutOfBoard;
