const filterByRatings = (priceFilteredBooks, minRatingValue) => {
    return priceFilteredBooks.filter(({ totalStars }) => totalStars >= minRatingValue);
}

export { filterByRatings };