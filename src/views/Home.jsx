import { generateToken } from '@the-collab-lab/shopping-list-utils';
import { addItem, doesCollectionExist } from '../api';
import { useState } from 'react';

export function Home({ setListToken }) {
	const [tokenInput, setTokenInput] = useState('');

	// generate new token and send it to parent component to store in state
	// send hidden placeholder item to firestore to create collection for list token (will be filtered out so using default daysUntilNextPurchase value of 7)
	const clickHandler = () => {
		let newToken = generateToken();
		setListToken(newToken);
		addItem(newToken, {
			itemName: 'placeholder',
			daysUntilNextPurchase: 7,
			hidden: true,
		});
	};

	const tokenHandler = (e) => {
		setTokenInput(e.target.value);
	};

	const handleTokenSubmit = async (e) => {
		e.preventDefault();
		const exists = await doesCollectionExist(tokenInput);
		if (exists) setListToken(tokenInput);
		else {
			setTokenInput('');
			alert('Unfortunately that list does not exist');
		}
	};

	return (
		<div className="pt-5">
			<div className="flex flex-col items-center">
				<p>Welcome to your new shopping list!</p>
				<button className="ButtonGeneral mt-5" onClick={clickHandler}>
					Create a new list
				</button>
			</div>

			<div className="flex flex-col items-center py-5">
				<p>- or -</p>
			</div>

			<div className="flex flex-col items-center">
				<form
					onSubmit={handleTokenSubmit}
					className="flex flex-col items-center text-center"
				>
					<label htmlFor="shareToken">
						Enter three word token to join an existing list:
					</label>
					<input
						required
						aria-required="true"
						type="text"
						id="shareToken"
						className="InputGeneral mt-3"
						placeholder="Enter Token"
						value={tokenInput}
						onChange={tokenHandler}
					/>
					<button className="ButtonGeneral mt-5">Join existing list</button>
				</form>
			</div>
		</div>
	);
}
