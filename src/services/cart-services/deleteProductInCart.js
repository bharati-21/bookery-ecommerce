import axios from "axios";

const deleteProductInCart = async (productId, token) =>
	axios.delete(`/api/user/cart/${productId}`, {
		headers: { authorization: token },
	});

export { deleteProductInCart };
