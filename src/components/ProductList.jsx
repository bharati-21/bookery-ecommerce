import { useFilter } from '../contexts';
import { filterByGenres, filterByPrice, filterByRatings } from '../utils/';
import { ProductItem } from './ProductItem';

const ProductList = ({ products }) => {

    const { filterState } = useFilter();

    const productsFilteredByGenre = filterByGenres(products, filterState.genres);
    const productsFilteredByPrice = filterByPrice(productsFilteredByGenre, filterState.price);
    const productsFilteredByRatings = filterByRatings(productsFilteredByPrice, filterState.ratingsMoreThan)

    return (
        <section className="product-catalog">
            <p className="text-reg mb-1">Number of Books: <span className="primary-color">{productsFilteredByRatings.length}</span></p>
            <article className="products-container grid grid-autofit">
                {
                    productsFilteredByRatings.length > 0 ?
                        productsFilteredByRatings.map(product => <ProductItem product={product} key={product._id} />)
                        :
                    <h2 className="my-1 text-center error-color">No Books Found!</h2>
                }
            </article>
        </section>
    )
}

export { ProductList };