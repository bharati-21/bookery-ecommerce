import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useCart, useAuth } from 'contexts';
import { postToCart } from 'utils/';
import { useToast } from 'custom-hooks/useToast'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({book}) => {

    const { cartState: { cart }, cartDispatch } = useCart();
    const { authState: { token } } = useAuth();
    const { showToast } = useToast();
    const [ bookInCart, setBookInCart ] = useState(false);
    const navigate = useNavigate();

    const {
        author,
        bookType,
        coverImg,
        discountPercent,
        genres,
        _id,
        offers,
        originalPrice,
        sellingPrice,
        title,
        totalRatings,
        totalStars
    } = book;

    useEffect(() => {
        const isBookInCart = cart.includes(cartItem => cartItem.id === id)
        if(isBookInCart) {
            setBookInCart(true);
        }
        else {
            setBookInCart(false);
        }
    }, [])
    
    const localeOriginalPrice = originalPrice.toLocaleString("en-IN", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    const localeSellingPrice = sellingPrice.toLocaleString("en-IN", {minimumFractionDigits: 2, maximumFractionDigits: 2});

    const localeTotalRatings = totalRatings.toLocaleString("en-IN");

    const genreMapping = genres.map(genre => 
        <li key={`${_id}-${genre}`} className="badge text-xs badge-secondary p-0-25 px-0-5 genre-item">
            {genre} 
        </li>
    );

    const productBadge = bookType === 'Hardcover' ?
       <span className="badge badge-secondary mx-0-25 my-0-75 text-reg px-0-5">
            {bookType}
        </span>
        :
        offers.bestSeller ? 
            <span className="badge badge-secondary mx-0-25 my-0-75 text-reg  px-0-75">
                Best Seller
            </span>
        : 
        offers.newArrival ?
            <span className="badge badge-error mx-0-25 my-0-75 text-reg  px-0-75">
                New Arrival
            </span>:
    null;

    const handleAddToCart = async () => {
        const productPostedToCart = await postToCart(book, token);
    
        if(productPostedToCart) {   
            showToast('Book added to the cart', 'success');
            cartDispatch({type: 'ADD_TO_CART', payload: {cart: [...cart, book], error:false, loading: false}});
            setBookInCart(true);
        }
        else {
            showToast('Failed to add book to cart. Please try again later.', 'error');
        }
    }
        
    return (
        <div className="product-card card card-vertical card-wt-dismiss card-wt-badge" id={_id}>
            {productBadge ?? productBadge}
            <button className="btn btn-primary btn-icon btn-dismiss btn-card-wishlist m-0-5 flex--col flex-align-center flex-justify-center">
                <span className="icon">
                    <FavoriteBorderIcon  />
                </span>
            </button>

            <div className="card-header p-1">
                <img src={coverImg} alt={title} />
                <div className="rating-container rating-badge m-1 px-0-75">
                <span className="rating-value flex-row flex-align-center flex-justify-center">
                    {totalStars}
                    <StarIcon className="star-icon ml-0-25 mr-0-5 success-color"/>
                    |
                    <span className="ml-0-5 rating-count">
                        {localeTotalRatings}
                    </span>  
                </span>               
            </div>
            </div>
            <div className="card-body px-0-75">
                <div className="card-description my-0-25">
                    <h6 className="text-lg card-title">
                        {title}
                    </h6>
                    <p className="mt-0-25 text-sm card-subtitle">
                        {author}
                    </p>
                </div> 
                <div className="card-content my-1">
                    <div className="card-price flex-row flex-align-start flex-justify-between">
                        <div className="discounted-price flex-col">
                            <p className="price-discounted">
                                ₹ {localeSellingPrice}
                            </p>
                            <span className="success-color percentage-discount">
                                {discountPercent} %
                            </span> 
                        </div>
                        <p className="price-original">
                            <span className="text-linethrough error-color">
                                ₹ {localeOriginalPrice}
                            </span>   
                        </p>
                    </div>
                    <div className="card-genres">
                        <ul className="list list-inline list-style-none mt-1-5 flex-row flex-wrap flex-justify-start">
                            {genreMapping}
                        </ul>
                    </div>
                </div>            
            </div>
            <div className="card-footer mt-1 mb-0-75  px-0-75">
                <button className="btn btn-primary btn-text-icon btn-full-width p-0-25" 
                    onClick={e => 
                        bookInCart 
                        ? 
                            navigate('/cart') 
                            : 
                            handleAddToCart()
                    }
                >
                    {
                        bookInCart ? <span>Go to Cart</span>: <span>Add to Cart</span>
                    } 
                    <span className="icon">
                        <ShoppingCartIcon />
                    </span> 
                </button>
            </div>
        </div>
    )
}

export { ProductItem };