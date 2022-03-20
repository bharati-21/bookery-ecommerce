const filterByPrice = (genreFilteredBooks, maxPriceValue) => {
    return genreFilteredBooks.filter(({ sellingPrice }) => sellingPrice <= maxPriceValue);
}

export { filterByPrice };