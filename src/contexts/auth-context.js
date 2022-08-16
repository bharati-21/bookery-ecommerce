import { createContext, useContext, useState } from "react";

import {
	useAddress,
	useCart,
	useFilter,
	useOrders,
	useWishList,
} from "contexts";

const initialAuthState = {
	user: {},
	isAuth: false,
	token: "",
};

const AuthContext = createContext(initialAuthState);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
	const setInitialState = () => {
		const bookeryToken = localStorage.getItem("bookery-token");
		if (bookeryToken) {
			return {
				token: bookeryToken,
				isAuth: true,
				user: JSON.parse(localStorage.getItem("bookery-user")),
			};
		}
		return initialAuthState;
	};
	const [authState, setAuthState] = useState(setInitialState);

	const { addressDispatch } = useAddress();
	const { cartDispatch } = useCart();
	const { filterDispatch } = useFilter();
	const { ordersDispatch } = useOrders();
	const { wishListDispatch } = useWishList();

	const logoutUser = () => {
		localStorage.removeItem("bookery-token");
		localStorage.removeItem("bookery-user");
		setAuthState({ ...initialAuthState });
		addressDispatch({
			type: "SET_ADDRESSES",
			payload: { addresses: [] },
		});
		cartDispatch({
			type: "SET_CART_ITEMS",
			payload: {
				cartItems: [],
				error: null,
				loading: false,
			},
		});
		filterDispatch({ filterType: "CLEAR_FILTERS" });
		ordersDispatch({
			type: "SET_ORDERS",
			payload: { orders: [] },
		});
		wishListDispatch({
			type: "ADD_TO_WISHLIST",
			payload: {
				wishListItems: [],
				error: null,
				loading: false,
			},
		});
	};

	return (
		<Provider value={{ authState, setAuthState, logoutUser }}>
			{children}
		</Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
