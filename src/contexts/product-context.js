import { createContext, useContext, useEffect, useReducer } from "react";

import { fetchCategories, fetchProducts } from "services";
import { productReducerFunction } from "reducers/";

const initalProductState = {
	products: [],
	categories: [],
	productsMessages: { loading: true, error: null },
	productItemMessages: { loading: true, error: null },
	categoriesMessages: { loading: true, error: null },
	isOngoingNetworkCall: false,
	productItem: null,
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
