const productActionTypes = {
	INIT_PRODUCTS_SUCCESS: "INIT_PRODUCTS_SUCCESS",
	INIT_PRODUCTS_FAILURE: "INIT_PRODUCTS_FAILURE",
	INIT_CATEGORIES_SUCCESS: "INIT_CATEGORIES_SUCCESS",
	INIT_CATEGORIES_FAILURE: "INIT_CATEGORIES_FAILURE",
};

const productReducerFunction = (
	prevProductState,
	{
		type,
		payload: {
			products,
			categories,
			productsMessages,
			categories,
			categoriesMessages,
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

		default:
			return { ...prevProductState };
	}
};

export { productReducerFunction };
