import { ListItem } from '../components';

export function List({ data, listToken }) {
	return (
		<>
			<h2>Smart Shopping List</h2>
			{listToken && (
				<p>Want to share your list? Your list token is: {listToken}</p>
			)}
			<ul>
				{data.length > 0 ? (
					<ul>
						{data.map((item) => {
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
