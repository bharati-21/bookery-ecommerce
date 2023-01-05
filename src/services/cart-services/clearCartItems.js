import axios from "axios";

export const clearCartItems = (token) =>
	axios.get(`${process.env.REACT_APP_API_URL}/users/cart/clear`, {
		headers: { authorization: token },
	});
