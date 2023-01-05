import axios from "axios";

export const postNewOrder = (token, order) =>
	axios.post(
		`${process.env.REACT_APP_API_URL}/users/orders`,
		{ order },
		{ headers: { authorization: token } }
	);
