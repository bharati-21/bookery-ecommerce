import axios from "axios";

const deleteProductInWishList = async (productId, token) =>
	axios.delete(`http://localhost:5000/api/users/wishlist/${productId}`, {
		headers: { authorization: token },
	});

export { deleteProductInWishList };
