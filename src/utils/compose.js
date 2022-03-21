import { useFilter } from 'contexts';
import { filterByGenres, filterByPrice, filterByRatings, filterByBookTypes, sortBooks } from './';

const compose = (initialBooksList) => {

    const { filterState: { genres, price, ratingsMoreThan, bookType, sortBy }} = useFilter();

    // Filter functions
    const booksFilteredByGenre = filterByGenres(initialBooksList, genres);
    const booksFilteredByPrice = filterByPrice(booksFilteredByGenre, price);
    const booksFilteredByRatings = filterByRatings(booksFilteredByPrice, ratingsMoreThan);
    const booksFilteredByBookTypes = filterByBookTypes(booksFilteredByRatings, bookType);

    // Sorting function
    return sortBooks(booksFilteredByBookTypes, sortBy);
}

export { compose };