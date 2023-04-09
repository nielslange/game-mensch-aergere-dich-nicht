import getWinner from './getWinner';

const hasWinner = ( pegs: any ) => ( getWinner( pegs ) ? true : false );

export default hasWinner;
