const isOwnPeg = ( { player, currentPlayer }: { player: string; currentPlayer: string } ) => {
	return player === currentPlayer;
};

export default isOwnPeg;
