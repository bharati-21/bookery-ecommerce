import axios from "axios";

export const getAllOrders = (token) =>
	axios.get("http://localhost:5000/api/users/orders", {
		headers: { authorization: token },
	});
