import axios from "axios";

const deleteProductInCart = async (productId, token) =>
	axios.delete(`https://bookery-server.herokuapp.com/api/users/cart/${productId}`, {
		headers: { authorization: token },
	});

export { deleteProductInCart };
