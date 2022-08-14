import axios from "axios";

const getProductItem = (productId) =>
	axios.get(`http://localhost:5000/api/products/${productId}`);

export { getProductItem };
