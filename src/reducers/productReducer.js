const productActionTypes = {
    INIT_PRODUCTS_SUCCESS: 'INIT_PRODUCTS_SUCCESS',
    INIT_PRODUCTS_FAILURE: 'INIT_PRODUCTS_FAILURE'
};

const productReducerFunction = (prevProductState, {type, payload: {products, error, loading}}) => {
    switch(type) {
        case productActionTypes.INIT_PRODUCTS_SUCCESS :
            return {...prevProductState, products, error, loading};
        case productActionTypes.INIT_PRODUCTS_FAILURE :
            return {
                ...prevProductState, error, loading
            }
        default: 
            return {...prevProductState}
    }
}

export { productReducerFunction };