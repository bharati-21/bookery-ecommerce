import { createContext, useContext, useEffect, useReducer } from 'react';

import { fetchProducts } from 'utils/';
import { productReducerFunction } from 'reducers/';

const initalProductState = {
    products: [],
    loading: true,
    error: null
}

const ProductContext = createContext(initalProductState);
const { Provider } = ProductContext;

const ProductProvider = ({ children }) => {

    useEffect(() => {
        fetchProducts(productDispatch);
    }, []);

    const [productState, productDispatch] = useReducer( productReducerFunction, initalProductState);

    return (
        <Provider value={{productDispatch, productState}}>
            {children}
        </Provider>
    );
}

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };