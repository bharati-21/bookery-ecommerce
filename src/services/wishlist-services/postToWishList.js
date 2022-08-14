import axios from "axios";

const postToWishList = async (product, token) =>
	axios.post(
		"https://bookery-server.herokuapp.com/api/users/wishlist",
		{ product: { ...product } },
		{
			headers: { authorization: token },
		}
	);

export { postToWishList };
