import { useState } from 'react';
import { ListItem } from '../components';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { refreshData } from '../api';
import { XMarkIcon } from '@heroicons/react/24/solid';

export function List({ data, listToken }) {
	const [listFilter, setListFilter] = useState('');

	const hiddenButtonClassName = listFilter === '' ? 'invisible' : 'visible';

	const clickHandler = (event) => {
		event.preventDefault();
		setListFilter('');
	};

	const submitHandler = (event) => {
		event.preventDefault();
	};

	const ONE_DAY_IN_MILLISECONDS = 86400000;

	// force refresh of list to re-sort/clear checkboxes once a day
	useEffect(() => {
		const refreshTimeout = setTimeout(() => {
			refreshData(listToken);
		}, ONE_DAY_IN_MILLISECONDS);
		return () => {
			clearTimeout(refreshTimeout);
		};
	}, [listToken, data]);

	return (
		<div className="ListView pt-5 flex flex-col items-center">
			{listToken && (
				<div className="flex flex-col items-start mb-3">
					<p>Want to share your list?</p>
					<p>
						Your list token is:
						<span className="ml-1 font-semibold">{listToken}</span>
					</p>
				</div>
			)}
			{data.length > 0 ? (
				<form
					onSubmit={submitHandler}
					className="mb-3 w-full md:max-w-sm flex flex-wrap"
				>
					<label htmlFor="itemInput" className="min-w-full">
						Filter Items:{' '}
					</label>
					<input
						type="text"
						id="itemInput"
						name="itemInput"
						placeholder="Start typing here..."
						value={listFilter}
						onChange={(event) => setListFilter(event.target.value)}
						className="p-1 flex-1 text-darkgray dark:bg-offwhite border border-lightgray rounded"
					/>
					<span
						className={`w-8 h-8 ml-1 md:w-9 md:h-9 md:ml-2 ${hiddenButtonClassName}`}
					>
						<button type="reset" onClick={clickHandler}>
							<XMarkIcon
								title="clear field"
								alt="clear-field"
								className="w-8 h-8 md:w-9 md:h-9 bg-lightgray text-offwhite rounded-md border border-lightgray hover:bg-medgray"
							/>
						</button>
					</span>
				</form>
			) : null}
			{data.length > 0 ? (
				<ul className="w-full md:max-w-sm mt-2">
					{data
						.filter((item) =>
							item.name.toLowerCase().includes(listFilter.toLowerCase()),
						)
						.map((item) => {
							return (
								<ListItem itemData={item} listToken={listToken} key={item.id} />
							);
						})}
				</ul>
			) : (
				<div className="flex flex-col items-center mt-10">
					<p className=" mb-10">There are currently no items in the list.</p>
					<Link to={'/add-item'}>
						<button className="ButtonGeneral" type="button">
							Add item
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}
