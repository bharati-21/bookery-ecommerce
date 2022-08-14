import axios from "axios";

const getProductItem = (productId) =>
	axios.get(`https://bookery-server.herokuapp.com/api/products/${productId}`);

export { getProductItem };
