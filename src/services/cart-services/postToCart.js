import axios from "axios";

const postToCart = async (product, token) =>
	axios.post(
		"http://localhost:5000/api/users/cart",
		{ product },
		{
			headers: { authorization: token },
		}
	);

export { postToCart };
