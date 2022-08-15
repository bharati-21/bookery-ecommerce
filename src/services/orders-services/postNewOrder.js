import axios from "axios";

export const postNewOrder = (token, order) =>
	axios.post(
		"https://bookery-server.herokuapp.com/api/users/orders",
		{ order },
		{ headers: { authorization: token } }
	);
