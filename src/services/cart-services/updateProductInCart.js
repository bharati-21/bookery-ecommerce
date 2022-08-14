import axios from "axios";

const updateProductInCart = async (productId, token, type) =>
	axios.post(
		`http://localhost:5000/api/users/cart/${productId}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);

export { updateProductInCart };
