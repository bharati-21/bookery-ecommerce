import { useAuth, useCart, useWishList } from "contexts";
import { useToast, useUpdateCart } from "custom-hooks/";
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deleteProductInWishList, postToCart } from "utils";


const WishListItem = ({ wishListItem }) => {

    const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false); 

    const {
        _id,
        author,
        title,
        coverImg,
        discountPercent,
        originalPrice,
        sellingPrice,
    } = wishListItem;
 
    const localeSellingPrice = sellingPrice.toLocaleString("en-IN", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    const localeOriginalPrice = originalPrice.toLocaleString("en-IN", {minimumFractionDigits: 2, maximumFractionDigits: 2});

    const { authState: { token } } = useAuth();
    const { showToast } = useToast();
    const { wishListDispatch } = useWishList();
    const { cartState: { cartItems }, cartDispatch } = useCart();
    const { callUpdateProductInCart } = useUpdateCart();


    const handleRemoveFromWishList = async (showToastAfterRemovingItem=true) => {
        setIsOngoingNetworkCall(true);
        try {
            const prodcutDeletedFromWishList = await deleteProductInWishList(_id, token);
            if(prodcutDeletedFromWishList) {   
                if(showToastAfterRemovingItem) showToast('Item removed from wishlist', 'success');
                wishListDispatch({type: 'ADD_TO_WISHLIST', payload: {wishListItems: prodcutDeletedFromWishList, error:false, loading: false}});
            }
            else {
                if(showToastAfterRemovingItem) showToast('Failed to remove item from wishlist. Please try again later.', 'error');
            }
        }
        catch(error){
            if(showToastAfterRemovingItem) showToast('Failed to remove item from wishlist. Please try again later.', 'error');
        }
    }

    const handleMoveToCart = async () => {
        setIsOngoingNetworkCall(true);
        const isItemAlreadyInCart = cartItems.find(item => item._id === _id);

        if(isItemAlreadyInCart) {
            const itemMovedToCart = await callUpdateProductInCart(_id, 'increment', false);

            if(itemMovedToCart) {
                handleRemoveFromWishList(false); 
                showToast('Item moved to cart', 'success');
            }
            else {
                showToast('Failed to move item to cart. Please try again later.', 'error');
            }
        }
        else {
            try {
                const productPostedToCart = await postToCart(wishListItem, token);
                if(productPostedToCart) {   
                    showToast('Item moved to cart', 'success');
                    cartDispatch({type: 'ADD_TO_CART', payload: {cartItems: productPostedToCart, error:false, loading: false}});
                    handleRemoveFromWishList(false); 
                }
                else {
                    showToast('Failed to move item to cart. Please try again later.', 'error');
                }
            }
            catch(error) {
                showToast('Failed to move item to cart. Please try again later.', 'error');
            }                
        } 
        setIsOngoingNetworkCall(false);      
    }

    return (
        <article className="product-card card card-vertical card-wt-dismiss card-wt-badge" id={_id}>
            <button className={`btn btn-primary btn-icon btn-dismiss btn-card-wishlist m-0-5 flex--col flex-align-center flex-justify-center ${isOngoingNetworkCall ? 'btn-disabled' : ''}`} disabled={isOngoingNetworkCall} onClick={() => handleRemoveFromWishList()}>
                <span className="icon">
                    <FavoriteIcon />
                </span>
            </button>

            <div className="card-header p-1">
                <img src={coverImg} alt={title} />
            </div>

            <div className="card-body px-0-75 w-100 text-center">
                <div className="card-description my-0-25">
                    <h6 className="text-lg card-title">
                        {title}
                    </h6>
                    <p className="mt-0-25 text-sm card-subtitle">
                        {author}
                    </p>
                </div> 

                <div className="card-content my-1 text-center">
                    <div className="card-price flex-row flex-align-center flex-justify-evenly">
                        <p className="price-discounted">
                            ₹ {localeSellingPrice}
                        </p>
                        <p className="price-original text-linethrough error-color text-sm">
                                ₹ {localeOriginalPrice}
                        </p>
                        <p className="price-discounted-percentage success-color percentage-discount text-sm">
                            Save  {discountPercent} %
                        </p>
                    </div>
                </div>            
            </div>
            <div className="card-footer mt-1 mb-0-75  px-0-75">
                <button className={`btn btn-primary btn-text-icon btn-full-width p-0-25 ${isOngoingNetworkCall ? 'btn-disabled' : ''}`} disabled={isOngoingNetworkCall}
                    onClick={handleMoveToCart}>
                        Move To Cart
                    <span className="icon">
                        <ShoppingCartIcon />
                    </span> 
                </button>
            </div>
        </article>
        
    )
}
export { WishListItem };