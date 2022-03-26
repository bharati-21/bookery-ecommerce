import { createContext, useContext, useEffect, useReducer } from 'react';

import { fetchWishListItems } from 'utils/';
import { useAuth } from './';
import { wishlistReducerFunction } from 'reducers/';

const initialWishListState = {
    wishListItems: [],
    loading: true,
    error: null
}

const WishListContext = createContext(initialWishListState);
const { Provider } = WishListContext;

const WishListProvider = ({ children }) => {

    const { authState: { isAuth, token } } = useAuth();
    
    useEffect(() => {
        if(isAuth) {
            fetchWishListItems(cartDispatch, token);
        }
    }, [isAuth]);

    const [wishListState, wishListDispatch] = useReducer(wishlistReducerFunction, initialWishListState);

    return (
        <Provider value={{wishListState, wishListDispatch}}>
            {children}
        </Provider>
    );
}

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishListProvider };