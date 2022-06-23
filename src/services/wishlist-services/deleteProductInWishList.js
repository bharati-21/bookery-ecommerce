import axios from "axios";

const deleteProductInWishList = async (productId, token) =>
	axios.delete(`/api/user/wishlist/${productId}`, {
		headers: { authorization: token },
	});

export { deleteProductInWishList };
