import { useFilter } from 'contexts/';
import { filterByGenres, filterByPrice, filterByRatings, filterByBookTypes, sortBooks } from 'utils/';
import { ProductItem } from './ProductItem';

const ProductList = ({ products }) => {

    const { filterState : { genres, price, ratingsMoreThan, bookType, sortBy } } = useFilter();

    const booksFilteredByGenre = filterByGenres(products, genres);
    const booksFilteredByPrice = filterByPrice(booksFilteredByGenre, price);
    const booksFilteredByRatings = filterByRatings(booksFilteredByPrice, ratingsMoreThan);
    const booksFilteredByBookTypes = filterByBookTypes(booksFilteredByRatings, bookType);

    const booksSortedByOptions = sortBooks(booksFilteredByBookTypes, sortBy);

    return (
        <section className="product-catalog">
            <p className="text-reg mb-1">Number of Books: <span className="primary-color">{booksSortedByOptions.length}</span></p>
            <article className="products-container grid grid-autofit">
                {
                    booksSortedByOptions.length > 0 ?
                    booksSortedByOptions.map(product => <ProductItem product={product} key={product._id} />)
                        :
                    <h2 className="my-1 text-center error-color">No Books Found!</h2>
                }
            </article>
        </section>
    )
}

export { ProductList };