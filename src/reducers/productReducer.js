const productActionTypes = {
	INIT_PRODUCTS_SUCCESS: "INIT_PRODUCTS_SUCCESS",
	INIT_PRODUCTS_FAILURE: "INIT_PRODUCTS_FAILURE",
	INIT_CATEGORIES_SUCCESS: "INIT_CATEGORIES_SUCCESS",
	INIT_CATEGORIES_FAILURE: "INIT_CATEGORIES_FAILURE",
	SET_PRODUCT_ITEM: "SET_PRODUCT_ITEM",
	SET_PROUCT_ITEM_MESSAGES: "SET_PROUCT_ITEM_MESSAGES",
};

const productReducerFunction = (
	prevProductState,
	{
		type,
		payload: {
			products,
			categories,
			productsMessages,
			categoriesMessages,
			productItem,
			productItemMessages,
		},
	}
) => {
	switch (type) {
		case productActionTypes.INIT_PRODUCTS_SUCCESS:
			return {
				...prevProductState,
				products,
				productsMessages,
			};

		case productActionTypes.INIT_PRODUCTS_FAILURE:
			return {
				...prevProductState,
				productsMessages,
			};

		case productActionTypes.INIT_CATEGORIES_SUCCESS:
			return {
				...prevProductState,
				categories,
				categoriesMessages,
			};

		case productActionTypes.INIT_CATEGORIES_FAILURE:
			return {
				...prevProductState,
				categoriesMessages,
			};

		case productActionTypes.SET_PRODUCT_ITEM:
			return {
				...prevProductState,
				productItem,
				productItemMessages,
			};

		case productActionTypes.SET_PROUCT_ITEM_MESSAGES:
			return {
				...prevProductState,
				productItemMessages,
			};

		default:
			return { ...prevProductState };
	}
};

export { productReducerFunction };
