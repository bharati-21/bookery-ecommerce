import { createContext, useContext, useEffect, useReducer } from "react";

import { fetchProducts, fetchCategories } from "utils/";
import { productReducerFunction } from "reducers/";

const initalProductState = {
	products: [],
	categories: [],
	productsMessages: { loading: true, error: null },
	categoriesMessages: { loading: true, error: null },
	isOngoingNetworkCall: false,
};

const ProductContext = createContext(initalProductState);
const { Provider } = ProductContext;

const ProductProvider = ({ children }) => {

	useEffect(() => {
		fetchProducts(productDispatch);
		fetchCategories(productDispatch);
	}, []);

	const [productState, productDispatch] = useReducer(
		productReducerFunction,
		initalProductState
	);

	return (
		<Provider value={{ productDispatch, ...productState }}>
			{children}
		</Provider>
	);
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
