import { useState } from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	const [filter, setFilter] = useState('');
	return (
		<>
			<form>
				<label htmlFor="itemInput">Filter Items</label>
				<input
					type="text"
					id="itemInput"
					name="itemInput"
					value={filter}
					onChange={(event) => setFilter(event.target.value)}
				/>
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
