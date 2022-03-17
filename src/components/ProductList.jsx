import { ProductItem } from './ProductItem';
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