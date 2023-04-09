import { useDispatch, useSelector } from 'react-redux';
import { clearNotice, rollDie } from '../store/actions';

const Die = () => {
	const dispatch = useDispatch();
	const die = useSelector( ( state: any ) => state.die );

	const handleClick = () => {
		dispatch( clearNotice() );
		dispatch( rollDie() );
	};

	return (
		<div>
			<h2>Die.tsx</h2>
			<div>Die: { die }</div>
			<br />
			<button onClick={ handleClick }>Roll dice</button>
		</div>
	);
};

export default Die;
