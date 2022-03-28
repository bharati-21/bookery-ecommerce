import axios from 'axios';

const updateProductInCart = async (productId, token, type) => {
    try {
            const { status, data: { cart } } = await axios.post(`/api/user/cart/${productId}`, 
            { action: { type } }, 
            { headers : { authorization: token } }
        );
        if(status >= 200 && status < 300) {
            return cart;
        }
        throw new Error('Could not updat product in cart');
    }
    catch(error) {
        return false;
    }
}

export { updateProductInCart };