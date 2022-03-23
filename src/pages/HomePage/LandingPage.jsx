import { Header } from 'components/Header/Header';
import { landingPageImages } from 'assets/LandingPage/';
import './landing-page.css';
 

const LandingPage = () => {
    const { genres: {fiction, fantasy, romance, thriller, mystery, nonFiction, poem, classics }} = landingPageImages;
    const {topPicks: {aManCalledOve, atomicHabits, shadowAndBone} } = landingPageImages;

    return (
        <>
            <Header  />
            <main className="main-home my-2 mx-auto py-2 px-5">
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
                    <article className="category-container">
                        <div className="category card card-wt-badge">
                            <img src={nonFiction} alt="Non-Fiction Book Stacked" className="category-img img-responsive" />
                            <span className="badge badge-primary py-0-5 my-0-75 mx-0-25 px-0-75">
                                Hot Sale
                            </span>
                            <div className="card-content">
                                <h3 className="card-heading mb-1">Non Fiction</h3>
                            </div>
                        </div>
                        <div className="category card">
                            <img src={fiction} alt="Fiction Book" className="category-img img-responsive" />
                            <div className="card-content">
                                <h3 className="card-heading mb-1">Fiction</h3>
                            </div>
                        </div>
                        <div className="category card">
                            <img src={classics} alt="Classic - Pride and Prejudice" className="category-img img-responsive" />
                            <div className="card-content">
                                <h3 className="card-heading mb-1">Classics</h3>
                            </div>
                        </div>
                        <div className="category card card-wt-badge">
                            <img src={mystery} alt="Thriller Books" className="category-img img-responsive" />
                            <div className="card-content">
                                <h3 className="card-heading mb-1">Mystery</h3>
                            </div>
                        </div>
                        <div className="category card card-wt-badge">
                            <img src={fantasy} alt="Fantasy - A court of mist and fury" className="category-img img-responsive" />
                            <div className="card-content">
                                <h3 className="card-heading mb-1">Fantasy</h3>
                            </div>
                        </div>
                        <div className="category card card-wt-badge">
                            <img src={romance} alt="Romance Books" className="category-img img-responsive" />
                            <div className="card-content">
                                <h3 className="card-heading mb-1">Romance</h3>
                            </div>
                        </div>
                        
                    </article>
                    <a href="/pages/products/" className="btn text-center mx-auto mt-3 py-0-5 px-0-75">
                        Discover more genres! 
                        <span className="icon">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </section>
                <section className="section-top-picks my-3 pt-2 pb-3 text-center" id="top-picks">
                    <h2 className="section__head">
                        Top Picks
                    </h2>
                    <p className="section__lead my-2">
                        Find out what books are loved by all!
                    </p>
                    <article className="top-picks-container">
                        <section className="product-catalog">
                            <article className="products-container grid grid-autofit">
                                <div className="product-card card card-vertical">
                                    <a href="/pages/products/">
                                        <div className="card-header p-1">
                                            <img src={atomicHabits} alt="Atomic habits by James Clear" />
                                        </div>
                                        <div className="card-body px-0-75 pb-0-75">
                                            <div className="card-description my-0-25">
                                                <p className="card-title text-reg">Atomic Habits</p>
                                                <p className="text-xs card-subtitle">James Clear</p>
                                            </div>            
                                        </div>
                                    </a>
                                </div>
                                <div className="product-card card card-vertical">
                                    <a href="/pages/products/">
                                        <div className="card-header p-1">
                                            <img src={aManCalledOve} alt="Man Called Ove by Fredrick Backman" />
                                        </div>
                                        <div className="card-body px-0-75">
                                            <div className="card-description my-0-25">
                                                <p className="card-title text-reg">A Man Called Ove</p>
                                                <p className="text-xs card-subtitle">Fredrick Backman</p>
                                            </div>            
                                        </div>
                                    </a>        
                                </div>
                            
                                <div className="product-card card card-vertical">
                                    <div className="card-header p-1">
                                        <img src={shadowAndBone} alt="Shadow and Bone by Leigh Bardugo" />
                                    </div>
                                    <div className="card-body px-0-75">
                                        <div className="card-description my-0-25">
                                            <h6 className="text-reg card-title">Shadow and Bone</h6>
                                            <p className="text-xs card-subtitle">Leigh Bardugo</p>
                                        </div>          
                                    </div>
                                </div>
                                
                            </article>
                        </section>
                        
                    </article>
                    <a href="/pages/products/" className="btn text-center mx-auto mt-3 py-0-5 px-0-75">
                        Discover more books! 
                        <span className="icon">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </section>
            </main>
        </>
    );
}

export {LandingPage};