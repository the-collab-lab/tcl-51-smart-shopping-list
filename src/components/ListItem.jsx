import { updateItem } from '../api';
import { withinTwentyFourHours, getDaysBetweenDates } from '../utils';
import './ListItem.css';

export function ListItem({ itemData, listToken }) {
	// determine item's status based on dateNextPuchased and dateLastPurchased
	const stringSetter = () => {
		const today = new Date();
		const daysUntilNextPurchase = getDaysBetweenDates(
			itemData.dateNextPurchased.toDate(),
			today,
		);

		if (
			itemData.dateLastPurchased !== null &&
			getDaysBetweenDates(today, itemData.dateLastPurchased.toDate()) >= 60
		)
			return ['(inactive)', 'item-inactive'];
		if (daysUntilNextPurchase < 0) return ['(overdue)', 'item-overdue'];
		if (daysUntilNextPurchase <= 7) return ['(soon)', 'item-short'];
		if (daysUntilNextPurchase < 29) return ['(kind of soon)', 'item-mid'];
		return ['(not soon)', 'item-long'];
	};

	const [statusString, statusClass] = stringSetter();

	const onChangeHandler = () => {
		// send listToken (collection) and all current item data to database api
		if (!withinTwentyFourHours(itemData.dateLastPurchased)) {
			updateItem(listToken, itemData);
		}
	};

	return (
		<li className="ListItem">
			<input
				type="checkbox"
				id={itemData.id}
				onChange={onChangeHandler}
				checked={withinTwentyFourHours(itemData.dateLastPurchased)}
			/>
			<label htmlFor={itemData.id}>{itemData.name}</label>
			<span className={`item-status ${statusClass}`}>{statusString}</span>
		</li>
	);
}
