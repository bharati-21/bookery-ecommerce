import axios from "axios";

const postToWishList = async (product, token) =>
	axios.post(
		`${process.env.REACT_APP_API_URL}/users/wishlist`,
		{ product: { ...product } },
		{
			headers: { authorization: token },
		}
	);

export { postToWishList };
