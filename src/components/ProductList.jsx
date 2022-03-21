import { compose } from 'utils/';
import { ProductItem } from './ProductItem';

const ProductList = ({ products }) => {
    const sortedFilteredBooks = compose(products);  

    return (
        <section className="product-catalog">
            <p className="text-reg mb-1">Number of Books: <span className="primary-color">{sortedFilteredBooks.length}</span></p>
            <article className="products-container grid grid-autofit">
                {
                    sortedFilteredBooks.length > 0 ?
                    sortedFilteredBooks.map(book => <ProductItem book={book} key={book._id} />)
                        :
                    <h2 className="my-1 text-center error-color">No Books Found!</h2>
                }
            </article>
        </section>
    )
}

export { ProductList };