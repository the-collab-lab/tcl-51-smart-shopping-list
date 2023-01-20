import './Home.css';
import { generateToken } from '@the-collab-lab/shopping-list-utils';
import { addItem } from '../api';

export function Home({ setListToken }) {
	// upon button click generate new token and send it to parent component to store in state
	// also send a hidden placeholder item to firestore to create the collection for this list token (will be filtered out so just setting next purchase to default value of 7)
	const clickHandler = () => {
		let newToken = generateToken();
		setListToken(newToken);
		addItem(newToken, {
			itemName: 'placeholder',
			daysUntilNextPurchase: 7,
			hidden: true,
		});
	};

	return (
		<div className="Home">
			<p>Welcome to your new shopping list!</p>
			<button onClick={clickHandler}>Create a new list</button>
		</div>
	);
}
