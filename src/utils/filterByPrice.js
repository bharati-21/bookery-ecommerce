const filterByPrice = (genreFilteredBooks, maxPriceValue) => genreFilteredBooks.filter(({ sellingPrice }) => sellingPrice <= maxPriceValue);

export { filterByPrice };