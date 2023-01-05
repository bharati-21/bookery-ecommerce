import axios from "axios";

const getProductItem = (productId) =>
	axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`);

export { getProductItem };
