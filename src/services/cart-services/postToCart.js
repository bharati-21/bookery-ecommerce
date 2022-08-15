import axios from "axios";

const postToCart = async (product, token) =>
	axios.post(
		"https://bookery-server.herokuapp.com/api/users/cart",
		{ product },
		{
			headers: { authorization: token },
		}
	);

export { postToCart };
