import axios from "axios";

const updateProductInCart = async (productId, token, type) =>
	axios.post(
		`${process.env.REACT_APP_API_URL}/users/cart/${productId}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);

export { updateProductInCart };
