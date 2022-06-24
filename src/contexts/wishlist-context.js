import { createContext, useContext, useEffect, useReducer } from "react";

import { fetchWishListItems } from "services";
import { useAuth } from "./";
import { wishListReducerFunction } from "reducers/";

const initialWishListState = {
	wishListItems: [],
	loading: true,
	error: null,
};

const WishListContext = createContext(initialWishListState);
const { Provider } = WishListContext;

const WishListProvider = ({ children }) => {
	const {
		authState: { isAuth, token },
	} = useAuth();

	useEffect(() => {
		if (isAuth) {
			fetchWishListItems(wishListDispatch, token);
		}
	}, [isAuth]);

	const [wishListState, wishListDispatch] = useReducer(
		wishListReducerFunction,
		initialWishListState
	);

	return (
		<Provider value={{ wishListState, wishListDispatch }}>
			{children}
		</Provider>
	);
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };
