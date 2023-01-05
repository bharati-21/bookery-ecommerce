import axios from "axios";

const postNewAddress = (authToken, address) =>
	axios.post(
		`${process.env.REACT_APP_API_URL}/users/addresses`,
		{ address },
		{ headers: { authorization: authToken } }
	);

export { postNewAddress };
