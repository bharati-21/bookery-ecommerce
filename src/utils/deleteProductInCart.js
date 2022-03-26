import axios from 'axios';

const deleteProductInCart = async (productId, token) => {
    try {
            const { status, data: { cart } } = await axios.delete(`/api/user/cart/${productId}`, 
            { headers : { authorization: token } }
        );
        if(status >= 200 && status < 300) {
            return cart;
        }
        throw new Error('Could not delete product in cart');
    }
    catch(error) {
        return false;
    }
}

export { deleteProductInCart };