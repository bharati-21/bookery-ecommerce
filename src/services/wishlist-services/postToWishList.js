import axios from "axios";

const postToWishList = async (product, token) =>
	axios.post(
		"/api/user/wishlist",
		{ product: { ...product } },
		{
			headers: { authorization: token },
		}
	);

export { postToWishList };
