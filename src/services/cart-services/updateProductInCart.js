import axios from "axios";

const updateProductInCart = async (productId, token, type) =>
	axios.post(
		`/api/user/cart/${productId}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);

export { updateProductInCart };
