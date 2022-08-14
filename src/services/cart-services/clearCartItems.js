import axios from "axios";

export const clearCartItems = (token) =>
	axios.get("http://localhost:5000/api/users/cart/clear", {
		headers: { authorization: token },
	});
