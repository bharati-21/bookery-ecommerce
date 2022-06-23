import axios from "axios";

export const fetchProducts = async (productDispatch) => {
	try {
		const {
			data: { products },
		} = await axios.get("/api/products");

		productDispatch({
			type: "INIT_PRODUCTS_SUCCESS",
			payload: {
				products,
				productsMessages: {
					error: null,
					loading: false,
				},
			},
		});
	} catch (error) {
		productDispatch({
			type: "INIT_PRODUCTS_FAILURE",
			payload: {
				productsMessages: {
					error: "Products could not be fetched. Try again later.",
					loading: false,
				},
			},
		});
	}
};
