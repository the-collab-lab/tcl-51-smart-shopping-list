import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	const [filter, setFilter] = useState('');

	const clickHandler = (event) => {
		event.preventDefault();
		setFilter('');
	};

	return (
		<>
			<form>
				<label htmlFor="itemInput">Filter Items: </label>
				<input
					type="text"
					id="itemInput"
					name="itemInput"
					placeholder="Start typing here..."
					value={filter}
					onChange={(event) => setFilter(event.target.value)}
				/>
				{filter && (
					<span>
						<button onClick={clickHandler}>X</button>
					</span>
				)}
			</form>
			<ul>
				{data.length > 0 ? (
					<ul>
						{data
							.filter((item) => item.name.includes(filter) || filter === '')
							.map((item) => {
								return <ListItem name={item.name} key={item.id} />;
							})}
					</ul>
				) : (
					<p>There are currently no items in the list.</p>
				)}
			</ul>
		</>
	);
}
