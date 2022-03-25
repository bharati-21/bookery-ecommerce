const cartActionTypes = {
    INIT_CART_ITEMS: 'INIT_CART_ITEMS',
    ADD_TO_CART_FAILURE: 'ADD_TO_CART_FAILURE',
    ADD_TO_CART: 'ADD_TO_CART',
};

const cartReducerFunction = (prevCartState, {type, payload: {cartItems, cartItem, error, loading}}) => {
    switch(type) {

        case cartActionTypes.INIT_CART_ITEMS :
            return {...prevCartState, cartItems, error, loading};

        case cartActionTypes.ADD_TO_CART_FAILURE :
            return {
                ...prevCartState, cartItems: [],  error, loading
            }

        case cartActionTypes.ADD_TO_CART: 
            return {
                ...prevCartState, cartItems: [...prevCartState.cartItems, cartItem], error, loading
            }

        default: 
            return {...prevCartState}
    }
}

export { cartReducerFunction };