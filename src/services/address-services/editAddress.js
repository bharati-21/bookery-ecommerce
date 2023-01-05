import axios from "axios";

const editAddress = (authToken, address) =>
	axios.post(
		`${process.env.REACT_APP_API_URL}/users/addresses/${address._id}`,
		{ address },
		{ headers: { authorization: authToken } }
	);

export { editAddress };
