import axios from "axios";

const postNewAddress = (authToken, address) =>
	axios.post(
		"https://bookery-server.herokuapp.com/api/users/addresses",
		{ address },
		{ headers: { authorization: authToken } }
	);

export { postNewAddress };
