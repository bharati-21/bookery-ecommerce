import { useFilter } from "contexts";
import {
	filterByGenres,
	filterByPrice,
	filterByRatings,
	filterByBookTypes,
	sortBooks,
	filterBySearchText,
} from "utils";

const compose = (initialBooksList) => {
	const {
		filterState: {
			genres,
			price,
			ratingsMoreThan,
			bookType,
			sortBy,
			searchText,
		},
	} = useFilter();

	// Filter functions
	const bookFilteredBySearchText = filterBySearchText(
		initialBooksList,
		searchText
	);
	const booksFilteredByGenre = filterByGenres(
		bookFilteredBySearchText,
		genres
	);
	const booksFilteredByPrice = filterByPrice(booksFilteredByGenre, price);
	const booksFilteredByRatings = filterByRatings(
		booksFilteredByPrice,
		ratingsMoreThan
	);
	const booksFilteredByBookTypes = filterByBookTypes(
		booksFilteredByRatings,
		bookType
	);

	// Sorting function
	return sortBooks(booksFilteredByBookTypes, sortBy);
};

export { compose };
