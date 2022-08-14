import axios from "axios";

const updateProductInCart = async (productId, token, type) =>
	axios.post(
		`https://bookery-server.herokuapp.com/api/users/cart/${productId}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);

export { updateProductInCart };
