const CartListItem = ({ cartItem }) => {
    const {
        author,
        bookType,
        coverImg,
        discountPercent,
        _id,
        sellingPrice,
        title,
    } = cartItem;
 
    const localeSellingPrice = sellingPrice.toLocaleString("en-IN", {minimumFractionDigits: 2, maximumFractionDigits: 2});

    return (
        <article className="card card-horizontal product-card cart-item flex-row flex-align-center flex-justify-center p-1" id={_id}>
            <div className="card-header">
                <img src={coverImg} alt={title} className="card-img cart-item-img" />
            </div>
            <div className="card-body">
                <div className="card-main flex-col flex-justify-center">
                    <h6 className="card-title">{title}</h6>
                    <p className="text-sm card-subtitle color-gray mt-0-5">{author}</p>
                    <p className="text-sm text-uppercase mt-0-5">
                        {bookType}
                    </p>
                </div>
                <div className="card-content flex-col flex-align-start flex-justify-center">
                    <div className="card-price flex-col">
                        <p className="price-discounted text-lg">
                            ₹ {localeSellingPrice}
                        </p> 
                        <p className="discount-percent success-color text-sm">
                           You save <span>{discountPercent} %</span>
                        </p>    
                    </div>
                    <div className="card-quantity flex-row flex-align-center flex-justify-start">
                        <button className="btn btn-quantity btn-decrease-quantity">-</button>
                        <input type="number" name="cart-item-quantity" className="input-text input-quantity px-0-75 py-0-25 text-center" id="cart-item-quantity" min="1" />
                        <button className="btn btn-quantity btn-increase-quantity">+</button> 
                    </div>
                </div>
            </div>
            <div className="card-footer flex-row flex-align-center flex-justify-content flex-wrap">
                    <button className="btn btn-primary px-0-75 py-0-25 btn-full-width text-reg">
                        Add to wishlist
                    </button>
                    <button className="btn btn-primary btn-outline px-0-75 py-0-25 btn-full-width text-reg">
                        Remove from cart
                    </button>
                </div>
        </article>
    )
}

export { CartListItem }