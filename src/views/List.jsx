import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data, listToken }) {
	const [listFilter, setListFilter] = useState('');

	const clickHandler = (event) => {
		event.preventDefault();
		setListFilter('');
	};

	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<h2>Smart Shopping List</h2>
			{listToken && (
				<p>Want to share your list? Your list token is: {listToken}</p>
			)}
			<form onSubmit={submitHandler}>
				<label htmlFor="itemInput">Filter Items: </label>
				<input
					type="text"
					id="itemInput"
					name="itemInput"
					placeholder="Start typing here..."
					value={listFilter}
					onChange={(event) => setListFilter(event.target.value)}
				/>
				{listFilter && (
					<span>
						<button type="reset" onClick={clickHandler}>
							X
						</button>
					</span>
				)}
			</form>
			{data.length > 0 ? (
				<ul>
					{data
						.filter((item) =>
							item.name.toLowerCase().includes(listFilter.toLowerCase()),
						)
						.map((item) => {
							return (
								<ListItem itemData={item} listToken={listToken} key={item.id} />
							);
						})}
				</ul>
			) : (
				<p>There are currently no items in the list.</p>
			)}
		</>
	);
}
