import { useFilter } from '../contexts';
import { filterByGenres } from '../utils/';
import { ProductItem } from './ProductItem';

const ProductList = ({ products }) => {

    const { filterState } = useFilter();

    const productsFilteredByGenre = filterByGenres(products, filterState.genres);

    return (
        <section className="product-catalog">
            <article className="products-container grid grid-autofit">
                {
                    productsFilteredByGenre.map(product => <ProductItem product={product} key={product._id} />)
                }
            </article>
        </section>
    )
}

export { ProductList };