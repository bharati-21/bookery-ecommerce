import axios from "axios";

export const getAllOrders = (token) =>
	axios.get("https://bookery-server.herokuapp.com/api/users/orders", {
		headers: { authorization: token },
	});
