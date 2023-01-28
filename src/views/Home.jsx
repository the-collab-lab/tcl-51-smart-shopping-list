import './Home.css';
import { generateToken } from '@the-collab-lab/shopping-list-utils';
import { addItem, doesCollectionExist } from '../api';
import { useState } from 'react';

export function Home({ setListToken }) {
	const [tokenInput, setTokenInput] = useState('');

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
		<div className="Home">
			<div>
				<p>Welcome to your new shopping list!</p>
				<button onClick={clickHandler}>Create a new list</button>
			</div>

			<div>
				<p>- or -</p>
			</div>

			<div>
				<p>Join an existing shoping list by entering a three word token</p>
				<form onSubmit={handleTokenSubmit}>
					<label htmlFor="shareToken">Share Token</label>
					<input
						required
						aria-required="true"
						type="text"
						id="shareToken"
						placeholder="Enter Token"
						value={tokenInput}
						onChange={tokenHandler}
					/>
					<button>Join an existing list</button>
				</form>
			</div>
		</div>
	);
}
