import axios from "axios";

const deleteProductInWishList = async (productId, token) =>
	axios.delete(`https://bookery-server.herokuapp.com/api/users/wishlist/${productId}`, {
		headers: { authorization: token },
	});

export { deleteProductInWishList };
