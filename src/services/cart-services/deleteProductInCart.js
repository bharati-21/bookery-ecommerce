import axios from "axios";

const deleteProductInCart = async (productId, token) =>
	axios.delete(`http://localhost:5000/api/users/cart/${productId}`, {
		headers: { authorization: token },
	});

export { deleteProductInCart };
