import { ProductItem } from '../components/ProductItem';
const ProductList = () => {
    return (
        <section className="product-catalog">
            <article className="products-container grid grid-autofit">
                <ProductItem />
            </article>
        </section>
    )
}

export { ProductList };