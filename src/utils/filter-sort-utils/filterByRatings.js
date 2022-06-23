const filterByRatings = (priceFilteredBooks, minRatingValue) =>
	priceFilteredBooks.filter(({ totalStars }) => totalStars >= minRatingValue);

export { filterByRatings };
