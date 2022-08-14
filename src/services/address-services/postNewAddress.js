import axios from "axios";

const postNewAddress = (authToken, address) =>
	axios.post(
		"http://localhost:5000/api/users/addresses",
		{ address },
		{ headers: { authorization: authToken } }
	);

export { postNewAddress };
