import { updateItem } from '../api';
import './ListItem.css';

export function ListItem({ itemData }) {
	const onChangeHandler = (event) => {
		updateItem(event.target.id, event.target.value);
	};

	return (
		<li className="ListItem">
			<label htmlFor={itemData.id}>{itemData.name}</label>
			<input
				type="checkbox"
				id={itemData.id}
				value={itemData.totalPurchases}
				onChange={onChangeHandler}
			/>
		</li>
	);
}
