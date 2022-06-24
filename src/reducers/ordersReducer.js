const ordersActionType = {
	SET_ORDERS: "SET_ORDERS",
	SET_ORDERS_LOADER_ERROR: "SET_ORDERS_LOADER_ERROR",
};

const ordersReducerFunction = (
	prevOrdersState,
	{ type, payload: { orders, loading, error } }
) => {
	switch (type) {
		case ordersActionType.SET_ORDERS:
			return {
				...prevOrdersState,
				orders,
			};

		case ordersActionType.SET_ORDERS_LOADER_ERROR:
			return {
				...prevOrdersState,
				ordersLoading: loading,
				ordersError: error,
			};

		default:
			return { ...prevOrdersState };
	}
};

export { ordersReducerFunction };
