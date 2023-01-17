import { useState } from 'react';

export function AddItem({ addItem, listToken }) {
	const [form, setForm] = useState({ itemName: '', daysUntilNextPurchase: 7 });

	const handleSubmit = (event) => {
		event.preventDefault();
		setForm({ itemName: '', daysUntilNextPurchase: 7 });
		addItem(listToken, form);
	};

	const onChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="itemName">Item Name:</label>
			<input
				type="text"
				id="itemName"
				name="itemName"
				value={form.itemName}
				onChange={onChange}
			/>
			<fieldset>
				<div>
					<p>How soon will you buy this again?</p>
				</div>
				<label htmlFor="soon">Soon</label>
				<input
					type="radio"
					value={7}
					name="daysUntilNextPurchase"
					id="soon"
					onChange={onChange}
					checked={true}
				/>

				<label htmlFor="kindOfSoon">Kind of Soon</label>
				<input
					type="radio"
					value={14}
					name="daysUntilNextPurchase"
					id="kindOfSoon"
					onChange={onChange}
				/>

				<label htmlFor="notSoon">Not Soon</label>
				<input
					type="radio"
					value={30}
					name="daysUntilNextPurchase"
					id="notSoon"
					onChange={onChange}
				/>
			</fieldset>
			<button type="submit">Add Item</button>
		</form>
	);
}
