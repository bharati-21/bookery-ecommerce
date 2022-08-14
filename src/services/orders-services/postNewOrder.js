import axios from "axios";

export const postNewOrder = (token, order) =>
	axios.post(
		"http://localhost:5000/api/users/orders",
		{ order },
		{ headers: { authorization: token } }
	);
