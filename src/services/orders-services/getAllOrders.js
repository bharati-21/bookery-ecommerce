import axios from "axios";

export const getAllOrders = (token) =>
	axios.get(`${process.env.REACT_APP_API_URL}/users/orders`, {
		headers: { authorization: token },
	});
