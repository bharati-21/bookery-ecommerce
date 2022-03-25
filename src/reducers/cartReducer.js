const cartActionTypes = {
    INIT_CART_SUCCESS: 'INIT_CART_SUCCESS',
    INIT_CART_FAILURE: 'INIT_CART_FAILURE',
    ADD_TO_CART: 'ADD_TO_CART',
};

const cartReducerFunction = (prevCartState, {type, payload: {cart, error, loading}}) => {
    switch(type) {
        case cartActionTypes.INIT_CART_SUCCESS :
            return {...prevCartState, cart, error, loading};

        case cartActionTypes.INIT_CART_FAILURE :
            return {
                ...prevCartState, cart: [],  error, loading
            }

        case cartActionTypes.ADD_TO_CART: 
        console.log(cart);
            return {
                ...prevCartState, cart, error, loading
            }

        default: 
            return {...prevCartState}
    }
}

export { cartReducerFunction };