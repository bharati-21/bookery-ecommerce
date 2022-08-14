import axios from "axios";

const postNewAddress = (authToken, address) =>
	axios.post(
		"/api/user/address",
		{ address },
		{ headers: { authorization: authToken } }
	);

export { postNewAddress };
