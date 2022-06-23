const filterByBookTypes = (ratingFilteredBooks, bookTypeFilters) => {
	let booksFilteredyByBookTypes = [];

	// Are none of the book types checked? If yes, then just return the ratings filtered books
	const areNoBookTypesSelected = Object.values(bookTypeFilters).every(
		(bookTypeIsChecked) => !bookTypeIsChecked
	);
	if (areNoBookTypesSelected) return ratingFilteredBooks;

	// If some book types are checked, then filter books with those types
	for (const bookTypeFilter in bookTypeFilters) {
		const isBookTypeSelected = bookTypeFilters[bookTypeFilter];

		// If book type is checked and a book is not already in the filtered list, add it to the list. Else, skip adding the book
		const booksWithBookType = ratingFilteredBooks.filter(
			({ id, bookType }) =>
				isBookTypeSelected &&
				!booksFilteredyByBookTypes.find(
					(filteredByBookType) => filteredByBookType.id === id
				)
					? bookType === bookTypeFilter
					: false
		);

		// destrcuture and reassign booksFilteredyByBookTypes
		booksFilteredyByBookTypes = [
			...booksFilteredyByBookTypes,
			...booksWithBookType,
		];
	}

	return booksFilteredyByBookTypes;
};

export { filterByBookTypes };
