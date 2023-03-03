import { updateItem, deleteItem } from '../api';
import { withinTwentyFourHours, getDaysBetweenDates } from '../utils';
import { TrashIcon } from '@heroicons/react/24/outline';

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

	const clickHandler = () => {
		if (window.confirm(`Do you want to delete ${itemData.name}?`)) {
			deleteItem(listToken, itemData.id);
		}
	};

	return (
		<li
			className={`ListItem ${statusClass} mb-2 p-1 flex items-center justify-between`}
		>
			<input
				type="checkbox"
				id={itemData.id}
				onChange={onChangeHandler}
				checked={withinTwentyFourHours(itemData.dateLastPurchased)}
				className="w-3.5 h-3.5 ml-0.5 accent-lightgray"
			/>
			<label
				htmlFor={itemData.id}
				className="flex-1 mx-2"
			>{`${itemData.name} ${statusString}`}</label>
			<button
				onClick={clickHandler}
				className="p-1 border rounded border-lightgray/10 hover:border-lightgray/30"
			>
				<TrashIcon className="h-5 w-5" />
			</button>
		</li>
	);
}
