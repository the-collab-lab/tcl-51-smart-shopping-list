import { ListItem } from '../components';

export function List({ data }) {
	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
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
