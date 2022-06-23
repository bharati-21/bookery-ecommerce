const filterByGenres = (books, genreFilters) => {
	let filteredBooks = [];

	// Are none of the genres checked? If yes, then just return the books
	const areNoGenresSelected = Object.values(genreFilters).every(
		(genreIsChecked) => !genreIsChecked
	);
	if (areNoGenresSelected) return books;

	// If some genres are checked, then filter books with those genres
	for (const genre in genreFilters) {
		const isGenreChecked = genreFilters[genre];

		// If genre is filtered and a book is not already in the filtered list, add it to the list. Else, skip adding the book
		const booksWithGenre = books.filter(({ id, genres: bookGenres }) =>
			isGenreChecked &&
			!filteredBooks.find((filteredBook) => filteredBook.id === id)
				? bookGenres.includes(genre)
				: false
		);

		// destrcuture and reassign filteredBooks
		filteredBooks = [...filteredBooks, ...booksWithGenre];
	}

	return filteredBooks;
};

export { filterByGenres };
