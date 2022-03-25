import axios from 'axios';
export const fetchCartItems = async (cartDispatch, token) => {
    try {
        const { data : {cart}, status } = await axios.get('/api/user/cart', {
                headers: { authorization: token }
            }
        );

        if(status >= 200 && status < 300) {
            cartDispatch({
                type: 'INIT_CART_SUCCESS', 
                payload: {
                    cart,
                    error: null,
                    loading: false
                }
            });
            return;
        }
        cartDispatch({
            type: 'INIT_CART_FAILURE', 
            payload: {
                cart: [],
                error: 'Cart items could not be fetched. Try again after sometime',
                loading: false
            }
        });
    }
    catch(error) {
        cartDispatch({
            type: 'INIT_CART_FAILURE', 
            payload: {
                cart: [],
                error: 'Cart items could not be fetched. Try again after sometime',
                loading: false
            }
        });
    }
}