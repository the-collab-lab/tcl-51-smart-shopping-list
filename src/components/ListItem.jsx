import { updateItem } from '../api';
import { withinTwentyFourHours } from '../utils';
import './ListItem.css';

export function ListItem({ itemData, listToken }) {
	const onChangeHandler = (event) => {
		// send listToken (collection), id (document), and value (totalPurchases) to database api
		if (!withinTwentyFourHours(itemData.dateLastPurchased)) {
			updateItem(listToken, event.target.id, Number(event.target.value));
		}
	};

	return (
		<li className="ListItem">
			<input
				type="checkbox"
				id={itemData.id}
				value={itemData.totalPurchases}
				onChange={onChangeHandler}
				checked={withinTwentyFourHours(itemData.dateLastPurchased)}
			/>
			<label htmlFor={itemData.id}>{itemData.name}</label>
		</li>
	);
}
