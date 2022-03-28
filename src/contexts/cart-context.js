import { createContext, useContext, useEffect, useReducer } from 'react';

import { fetchCartItems } from 'utils/';
import { useAuth } from './';
import { cartReducerFunction } from 'reducers/';

const initialCartState = {
    cartItems: [],
    loading: true,
    error: null
}

const CartContext = createContext(initialCartState);
const { Provider } = CartContext;

const CartProvider = ({ children }) => {

    const { authState: { isAuth, token } } = useAuth();
    
    useEffect(() => {
        if(isAuth) {
            fetchCartItems(cartDispatch, token);
        }
    }, [isAuth]);

    const [cartState, cartDispatch] = useReducer(cartReducerFunction, initialCartState);

    return (
        <Provider value={{cartDispatch, cartState}}>
            {children}
        </Provider>
    );
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };