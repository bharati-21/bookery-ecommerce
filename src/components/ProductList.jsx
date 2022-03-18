import { ProductItem } from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <section className="product-catalog">
            <article className="products-container grid grid-autofit">
                {
                    products.map(product => <ProductItem product={product} key={product._id} />)
                }
            </article>
        </section>
    )
}

export { ProductList };