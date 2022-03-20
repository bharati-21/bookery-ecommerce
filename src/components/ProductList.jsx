import { useFilter } from '../contexts';
import { filterByGenres, filterByPrice, filterByRatings, filterByBookTypes } from '../utils/';
import { ProductItem } from './ProductItem';

const ProductList = ({ products }) => {

    const { filterState } = useFilter();

    const productsFilteredByGenre = filterByGenres(products, filterState.genres);
    const productsFilteredByPrice = filterByPrice(productsFilteredByGenre, filterState.price);
    const productsFilteredByRatings = filterByRatings(productsFilteredByPrice, filterState.ratingsMoreThan);
    const productsFilteredByBookTypes = filterByBookTypes(productsFilteredByRatings, filterState.bookType);

    return (
        <section className="product-catalog">
            <p className="text-reg mb-1">Number of Books: <span className="primary-color">{productsFilteredByBookTypes.length}</span></p>
            <article className="products-container grid grid-autofit">
                {
                    productsFilteredByBookTypes.length > 0 ?
                    productsFilteredByBookTypes.map(product => <ProductItem product={product} key={product._id} />)
                        :
                    <h2 className="my-1 text-center error-color">No Books Found!</h2>
                }
            </article>
        </section>
    )
}

export { ProductList };