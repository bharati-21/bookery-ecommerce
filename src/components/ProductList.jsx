import { useFilter } from '../contexts';
import { filterByGenres, filterByPrice } from '../utils/';
import { ProductItem } from './ProductItem';

const ProductList = ({ products }) => {

    const { filterState } = useFilter();

    const productsFilteredByGenre = filterByGenres(products, filterState.genres);
    const productsFilteredByPrice = filterByPrice(productsFilteredByGenre, filterState.price);

    return (
        <section className="product-catalog">
            <p className="text-reg mb-1">Number of Books: <span className="primary-color">{productsFilteredByPrice.length}</span></p>
            <article className="products-container grid grid-autofit">
                {
                    productsFilteredByPrice.map(product => <ProductItem product={product} key={product._id} />)
                }
            </article>
        </section>
    )
}

export { ProductList };