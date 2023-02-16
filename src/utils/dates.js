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
	if (dateLastPurchased === null) return false;

	const prevDate = dateLastPurchased.toDate().getTime();
	const today = new Date().getTime();
	return today - prevDate < ONE_DAY_IN_MILLISECONDS;
}

/**
 * @param {Date} newerPurchase a JavaScript Date
 * @param {Date} olderPurchase a JavaScript Date
 * @returns {number} the whole number of days between the two input dates
 * NOTE: will be positive if dateOne is later than dateTwo, otherwise will be negative
 */
export function getDaysBetweenDates(dateOne, dateTwo) {
	const dateOneMilliseconds = dateOne.getTime();
	const dateTwoMilliseconds = dateTwo.getTime();

	const timeBetween = dateOneMilliseconds - dateTwoMilliseconds;
	const daysBetween = timeBetween / ONE_DAY_IN_MILLISECONDS;

	// positive and negative numbers should both drop their decimals (only whole number answers)
	return daysBetween >= 0 ? Math.floor(daysBetween) : Math.ceil(daysBetween);
}
