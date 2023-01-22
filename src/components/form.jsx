export default function Form({ handleSubmit, form, onChange }) {
	return (
		<>
			<form onSubmit={handleSubmit} className="">
				<label htmlFor="itemName">Item Name:</label>
				<input
					type="text"
					id="itemName"
					name="itemName"
					value={form.itemName}
					onChange={onChange}
					required
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
						checked={form.daysUntilNextPurchase === 7}
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

			{form.isSubmitted && (
				<div>
					{form.isLoading ? 'Loading...' : ''}
					{form.isSuccess ? 'Item added Successfully' : form.error}
				</div>
			)}
		</>
	);
}
