import './Home.css';
import { generateToken } from '@the-collab-lab/shopping-list-utils';
import { Navigate } from 'react-router-dom';

export function Home({ updateListToken, listToken }) {
	// console.log(listToken, 'hey');

	// upon button click generate new token and send it to parent component to store in state
	const clickHandler = () => {
		let newToken = generateToken();

		updateListToken(newToken);
		// console.log(newToken);
	};

	return listToken === null ? (
		<div className="Home">
			<p>
				Welcome to your new shopping list!
				{/* Hello from the home (<code>/</code>) page! */}
			</p>
			<button onClick={clickHandler}>Create a new list</button>
		</div>
	) : (
		<Navigate to="/list" />
	);
}
