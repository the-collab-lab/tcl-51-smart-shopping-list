import './Home.css';
import { generateToken } from '@the-collab-lab/shopping-list-utils';

//we are giving home a list function that when called will update in
//the app.jsx.

export function Home({ updateListToken, listToken }) {
	const clickHandler = () => {
		let newToken = generateToken();

		updateListToken(newToken);
		console.log(newToken);
	};

	return (
		<div className="Home">
			<p>
				Welcome to your new shopping list!
				{/* Hello from the home (<code>/</code>) page! */}
			</p>
			<button onClick={clickHandler}>Create a new list</button>
		</div>
	);
}
