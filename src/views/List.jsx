import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
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
							return <ListItem name={item.name} key={item.id} />;
						})}
				</ul>
			) : (
				<p>There are currently no items in the list.</p>
			)}
		</>
	);
}
