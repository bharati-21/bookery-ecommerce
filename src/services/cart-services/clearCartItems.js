import axios from "axios";

export const clearCartItems = (token) =>
	axios.get("https://bookery-server.herokuapp.com/api/users/cart/clear", {
		headers: { authorization: token },
	});
