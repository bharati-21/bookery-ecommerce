import axios from 'axios';

const deleteProductInWishList = async (productId, token) => {
    try {
            const { status, data: { wishlist } } = await axios.delete(`/api/user/wishlist/${productId}`, 
            { headers : { authorization: token } }
        );
        if(status >= 200 && status < 300) {
            return wishlist;
        }
        throw new Error('Could not remove product from wishlist.');
    }
    catch(error) {
        return false;
    }
}

export { deleteProductInWishList };