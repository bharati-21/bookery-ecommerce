import axios from "axios";

const postToCart = async (product, token) =>
	axios.post(
		`${process.env.REACT_APP_API_URL}/users/cart`,
		{ product },
		{
			headers: { authorization: token },
		}
	);

export { postToCart };
