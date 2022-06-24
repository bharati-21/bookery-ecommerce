import { createContext, useContext, useEffect, useReducer } from "react";
import { ordersReducerFunction } from "reducers";

import { getAllOrders } from "services";
import { useAuth } from "./";

const initialOrdersState = {
	orders: [],
	ordersLoading: true,
	ordersError: null,
};

const OrdersContext = createContext(initialOrdersState);
const { Provider } = OrdersContext;

const OrdersProvider = ({ children }) => {
	const {
		authState: { isAuth, token },
	} = useAuth();

	const fetchOrders = async (token) => {
		try {
			const {
				data: { orders },
			} = await getAllOrders(token);

			ordersDispatch({
				type: "SET_ORDERS",
				payload: { orders },
			});
			ordersDispatch({
				type: "SET_ORDERS_LOADER_ERROR",
				payload: {
					loading: false,
					error: null,
				},
			});
		} catch (error) {
			ordersDispatch({
				type: "SET_ORDERS_LOADER_ERROR",
				payload: {
					loading: false,
					error: "Could not load the orders placed. Please try again later.",
				},
			});
		}
	};

	useEffect(() => {
		if (isAuth) {
			fetchOrders(token);
		}
	}, [isAuth]);

	const [ordersState, ordersDispatch] = useReducer(
		ordersReducerFunction,
		initialOrdersState
	);

	return (
		<Provider value={{ ...ordersState, ordersDispatch }}>
			{children}
		</Provider>
	);
};

const useOrders = () => useContext(OrdersContext);

export { useOrders, OrdersProvider };
