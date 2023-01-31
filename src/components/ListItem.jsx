import { updateItem } from '../api';
import './ListItem.css';

export function ListItem({ itemData, listToken }) {
	const onChangeHandler = (event) => {
		// send listToken (collection), id (document), and value (totalPurchases) to database api
		updateItem(listToken, event.target.id, Number(event.target.value));
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
