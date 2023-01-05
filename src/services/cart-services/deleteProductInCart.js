import axios from "axios";

const deleteProductInCart = async (productId, token) =>
	axios.delete(`${process.env.REACT_APP_API_URL}/users/cart/${productId}`, {
		headers: { authorization: token },
	});

export { deleteProductInCart };
