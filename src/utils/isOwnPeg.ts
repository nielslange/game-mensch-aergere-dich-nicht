interface isOwnPegProps {
	player: string;
	currentPlayer: string;
}

const isOwnPeg = ( { player, currentPlayer }: isOwnPegProps ) => {
	return player === currentPlayer;
};

export default isOwnPeg;
