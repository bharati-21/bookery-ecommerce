import axios from 'axios';
export const fetchProducts = async (productDispatch) => {
    try {
        const { data : {products}, status } = await axios.get('/api/products');
        if(status >= 200 && status < 300) {
            productDispatch({
                type: 'INIT_PRODUCTS_SUCCESS', 
                payload: {
                    products,
                    error: null,
                    loading: false
                }
            });
            return;
        }
        productDispatch({
            type: 'INIT_PRODUCTS_FAILURE', 
            payload: {
                products: [],
                error: 'Books could not be fetched. Try again after sometime',
                loading: false,
            }
        });
    }
    catch(error) {
        productDispatch({
            type: 'INIT_PRODUCTS_FAILURE', 
            payload: {
                products: [],
                error: 'Books could not be fetched. Try again after sometime',
                loading: false,
            }
        });
    }
}