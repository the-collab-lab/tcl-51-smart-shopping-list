export default function Form({ handleSubmit, form, onChange }) {
	return (
		<div className="flex flex-col items-center">
			<form className="pt-5" onSubmit={handleSubmit}>
				<label htmlFor="itemName" className="ItemLabel">
					Item Name:
				</label>
				<input
					type="text"
					id="itemName"
					name="itemName"
					className="InputGeneral"
					placeholder="Enter Item"
					value={form.itemName}
					onChange={onChange}
					required
				/>
				<fieldset>
					<div>
						<p className="ItemLabel">How soon will you buy this again?</p>
					</div>
					<div className="RadioItem item-short">
						<input
							type="radio"
							value={7}
							name="daysUntilNextPurchase"
							id="soon"
							className="RadioInput"
							onChange={onChange}
							checked={form.daysUntilNextPurchase === 7}
						/>
						<label className="ml-2" htmlFor="soon">
							Soon
						</label>
					</div>

					<div className="RadioItem item-mid">
						<input
							type="radio"
							value={14}
							name="daysUntilNextPurchase"
							id="kindOfSoon"
							className="RadioInput"
							onChange={onChange}
						/>
						<label className="ml-2" htmlFor="kindOfSoon">
							Kind of Soon
						</label>
					</div>

					<div className="RadioItem item-long">
						<input
							type="radio"
							value={30}
							name="daysUntilNextPurchase"
							id="notSoon"
							className="RadioInput"
							onChange={onChange}
						/>
						<label className="ml-2" htmlFor="notSoon">
							Not Soon
						</label>
					</div>
				</fieldset>
				<button className="ButtonGeneral" type="submit">
					Add Item
				</button>
			</form>

			{form.isSubmitted && (
				<div>
					{form.isLoading ? 'Loading...' : ''}
					{form.isSuccess ? 'Item added Successfully' : form.error}
				</div>
			)}
		</div>
	);
}
