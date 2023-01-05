import axios from "axios";

export const fetchCategories = async (productDispatch) => {
	try {
		const {
			data: { categories },
		} = await axios.get(
			`${process.env.REACT_APP_API_URL}/categories`
		);
		productDispatch({
			type: "INIT_CATEGORIES_SUCCESS",
			payload: {
				categories,
				categoriesMessages: {
					error: null,
					loading: false,
				},
			},
		});
	} catch (error) {
		productDispatch({
			type: "INIT_CATEGORIES_FAILURE",
			payload: {
				categoriesMessages: {
					error: "Categories could not be fetched. Try again later.",
					loading: false,
				},
			},
		});
	}
};
