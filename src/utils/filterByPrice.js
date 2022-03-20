const filterByPrice = (genreFilteredBooks, maxPriceValue) => {
    return genreFilteredBooks.filter(({ totalStars }) => totalStars <= maxPriceValue);
}

export { filterByPrice };