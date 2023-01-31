const ONE_DAY_IN_MILLISECONDS = 86400000;

/**
 * Get a new JavaScript Date that is `offset` days in the future.
 * @example
 * // Returns a Date 3 days in the future
 * getFutureDate(3)
 * @param {number} offset
 */
export function getFutureDate(offset) {
	return new Date(Date.now() + offset * ONE_DAY_IN_MILLISECONDS);
}

/**
 * @param {TimeStamp} dateLastPurchased Firebase TimeStamp type from data
 * @returns {boolean} whether date is within past 24 hours from current date
 * transform TimeStamp and current date to milliseconds and check whether less than one day in milliseconds
 */
export function withinTwentyFourHours(dateLastPurchased) {
	if (dateLastPurchased === null) return;

	const prevDate = dateLastPurchased.toDate().getTime();
	const today = new Date().getTime();
	return today - prevDate < ONE_DAY_IN_MILLISECONDS;
}
