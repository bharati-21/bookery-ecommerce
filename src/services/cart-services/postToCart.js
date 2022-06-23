import axios from "axios";

const postToCart = async (product, token) =>
	axios.post(
		"/api/user/cart",
		{ ...product },
		{
			headers: { authorization: token },
		}
	);

export { postToCart };
