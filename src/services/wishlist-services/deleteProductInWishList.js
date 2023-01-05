import axios from "axios";

const deleteProductInWishList = async (productId, token) =>
	axios.delete(
		`${process.env.REACT_APP_API_URL}/users/wishlist/${productId}`,
		{
			headers: { authorization: token },
		}
	);

export { deleteProductInWishList };
