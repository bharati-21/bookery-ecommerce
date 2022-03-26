import axios from 'axios';

const postToCart = async (product, token) => {
    try {
        const {data: {cart}, status} = await axios.post('/api/user/cart', {...product}, {
            headers: { authorization: token }
        })
        if(status >= 200 && status < 300) {
            return cart;
        }
        throw new Error('Could not add Item to the cart. Try Again');
    }   
    catch(error) {
        return false
    }
} 

export { postToCart };