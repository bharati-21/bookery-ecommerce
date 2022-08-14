import axios from "axios";

const postToWishList = async (product, token) =>
	axios.post(
		"http://localhost:5000/api/users/wishlist",
		{ product: { ...product } },
		{
			headers: { authorization: token },
		}
	);

export { postToWishList };
