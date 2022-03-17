const Filters = () => {
    return (
        <aside className="sidebar product-filters py-1-5 px-1">
            <div className="product-filters-head flex-row flex-align-center flex-justify-between mb-1-5 text-underline">
                <h5 className="sidebar-head">Filters</h5>
                <button className="btn btn-clear-filters btn-link">
                    Clear Filters
                </button>
            </div>
            <div className="filter-category filter">
                <ul className="list list-stacked list-style-none mt-1 filter-list">
                    <h6 className="filter-head text-reg list-head px-0-5 py-0-25 mt-0-5">
                        Genre Category
                    </h6>
                    <li className="list-item my-0-25 p-0-25">
                        <label htmlFor="genre-fiction" className="text-sm genre-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="genre-fiction" />
                            <span className="genre-text">
                                Fiction
                            </span>
                        </label>
                    </li>
                    <li className="list-item mb-0-25 p-0-25">
                        <label htmlFor="genre-non-fiction" className="text-sm genre-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="genre-non-fiction" />
                            <span className="genre-text">
                                Non-Fiction
                            </span>
                        </label>
                    </li>
                    <li className="list-item mb-0-25  p-0-25">
                        <label htmlFor="genre-romance" className="text-sm genre-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="genre-romance" />
                            <span className="genre-text">
                                Romance
                            </span>
                        </label>    
                    </li>
                    <li className="list-item mb-0-25  p-0-25">
                        <label htmlFor="genre-classics" className="text-sm genre-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="genre-classics" />
                            <span className="genre-text">
                                Classics
                            </span>
                        </label>
                    </li>
                    <li className="list-item mb-0-25  p-0-25">
                        <label htmlFor="genre-mystery" className="text-sm genre-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="genre-mystery" />
                            <span className="genre-text">
                                Mystery
                            </span>
                        </label>
                    </li>
                    <li className="list-item mb-0-25 p-0-25">
                        <label htmlFor="genre-fantasy" className="text-sm genre-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="genre-fantasy" />
                            <span className="genre-text">
                                Fantasy
                            </span>
                        </label>
                    </li>    
                </ul>        
            </div>
            <div className="filter-price mt-1 mb-2 filter">
                <ul className="list list-stacked list-style-none mt-1 mb-1-5 filter-list">
                    <label htmlFor="product-price-slider">          
                        <h6 className="filter-head text-reg list-head px-0-5 py-0-25 my-0-5">
                            Price
                        </h6>
                        <input type="range" className="input-range" id="product-price-slider" />
                    </label>
                    <div className="slider-price-range flex-row flex-justify-between flex-align-center">
                        <span className="text-sm min-price">₹ 100</span>
                        <span className="text-sm min-price">₹ 10,000</span>
                    </div>
                </ul>   
            </div>
            <div className="filter-ratings mt-1 mb-2">
                <ul className="list-spaced list-style-none">
                    <h6 className="filter-head text-reg list-head px-0-5 py-0-25 my-0-5 mb-0-5">Ratings</h6>
                    <li className="list-item mt-0-75 mb-0-5">
                        <label htmlFor="rating-4-above" className="text-sm rating-label flex-row flex-align-center">
                            <input type="radio" className="input-radio"  id="rating-4-above" name="product-ratings"/>
                            <span className="genre-text">
                                4 stars &amp; above
                            </span>
                        </label>
                    </li>
                    <li className="list-item mb-0-5">
                        <label htmlFor="rating-3-above" className="text-sm rating-label flex-row flex-align-center">
                            <input type="radio" className="input-radio" id="rating-3-above" name="product-ratings" />
                            <span className="genre-text">
                                 3 stars &amp; above
                            </span>
                        </label>
                    </li>
                    <li className="list-item mb-0-5">
                        <label htmlFor="rating-2-above" className="text-sm rating-label flex-row flex-align-center">
                            <input type="radio" className="input-radio"  id="rating-2-above" name="product-ratings"/>
                            <span className="genre-text">
                                Ratings 2 &amp; above
                            </span>
                        </label>
                    </li>
                    <li className="list-item mb-0-25">
                        <label htmlFor="rating-1-above" className="text-sm rating-1-above rating-label flex-row flex-align-center">
                            <input type="radio" className="input-radio" id="rating-1-above" name="product-ratings" />
                            <span className="genre-text">
                                Ratings 1 &amp; above
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="filter-category mt-1 mb-2">
                <ul className="list-spaced list-style-none">
                    <h6 className="filter-head text-reg list-head px-0-5 py-0-25 mb-0-5">
                        Book Cover
                    </h6>
                    <li className="list-item mt-0-75 mb-0-5">
                        <label htmlFor="cover-paperback" className="text-sm book-cover-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="cover-paperback" />
                            <span className="genre-text">
                                Paperback
                            </span>
                        </label>
                    </li>
                    <li className="list-item my-0-5">
                        <label htmlFor="cover-hardcover" className="text-sm book-cover-label flex-row flex-align-center">
                            <input type="checkbox" className="input-checkbox" id="cover-hardcover" />
                            <span className="genre-text">
                                Hardcover
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export { Filters };