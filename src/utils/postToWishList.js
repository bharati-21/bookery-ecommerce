import axios from 'axios';

const postToWishList = async (product, token) => {
    try {
        const {data: {wishlist}, status} = await axios.post('/api/user/wishlist', {product: {...product}}, {
            headers: { authorization: token }
        })
        if(status >= 200 && status < 300) {
            return wishlist;
        }
        throw new Error('Could not add item to the wishlist. Try Again');
    }   
    catch(error) {
        return false
    }
} 

export { postToWishList };