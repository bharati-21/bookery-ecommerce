import { Header } from 'components/Header/Header';
import './landing-page.css';
import { Link } from 'react-router-dom';
import { useProduct } from 'contexts';
 

const LandingPage = () => {
    const { products, productsMessages: { productLoading, productError }, categories, categoriesMessages: { loading, error } } = useProduct();

    const categoryMapping = categories.map(({ categoryImage, categoryName, _id }) =>
        <Link to="/products" state={categoryName} key={_id} className="category-product-link">
            <div className="category card card-wt-badge">
                <img src={categoryImage} alt={`${categoryName} Image`} className="category-img img-responsive" />
                {categoryName === 'Non-Fiction' ? <span className="badge badge-primary py-0-5 my-0-75 mx-0-25 px-0-75">Hot Sale</span> : null}
                <div className="card-content">
                    <h3 className="card-heading mb-1">{categoryName}</h3>
                </div>
            </div>
        </Link>
    );

    const sampleProducts = products.slice(0,3);
    return (
        <>
            <Header  />
            <main className="main-home mb-2 mx-auto px-5">
                <h3 className="hero-sub-head text-center mt-1 mb-2">
                    Now, get your books delivered within 24 hours to your doorstep!
                </h3>
                <section className="section-cateogies my-3 pt-2 pb-3 text-center" id="categories">
                    <h2 className="section__head">
                        Popular Genres
                    </h2>
                    <p className="section__lead my-2">
                        Check out the popular genres we have to offer!
                    </p>
                    <article className="category-container flex-row flex-wrap">
                        {
                            loading ? <h3 className="success-color text-center my-2 mx-auto">
                                Loading Categories...
                            </h3>
                            :
                            error ? <h3 className="error-color text-center my-2 mx-auto">
                                {error}
                            </h3>
                            :
                            categoryMapping
                        }                      
                    </article>
                    <Link to="/products" className="btn text-center mx-auto mt-3 py-0-5 px-0-75">
                        Discover more genres! 
                        <span className="icon">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </Link>
                </section>
                <section className="section-top-picks my-3 pt-2 pb-3 text-center" id="top-picks">
                    <h2 className="section__head">
                        Top Picks
                    </h2>
                    <p className="section__lead my-2">
                        Find out what books are loved by all!
                    </p>
                    <article className="top-picks-container">
                        <div className="products-container grid grid-autofit mx-auto">
                            {
                                sampleProducts.map(({ _id, title, author, coverImg }) => <div className="product-card card card-vertical" key={_id}>
                                    <Link to={`/products/${_id}`}>
                                        <div className="card-header p-1">
                                            <img src={coverImg} alt={`${title} book cover`} />
                                        </div>
                                        <div className="card-body px-0-75 pb-0-75">
                                            <div className="card-description my-0-25">
                                                <p className="card-title text-reg">{title}</p>
                                                <p className="text-xs card-subtitle">{author}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                )
                            }
                        </div>
                    </article>
                    <Link to="/products" className="btn text-center mx-auto mt-3 py-0-5 px-0-75">
                        Discover more books! 
                        <span className="icon">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </Link>
                </section>
            </main>
        </>
    );
}

export {LandingPage};