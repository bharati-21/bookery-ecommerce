import axios from "axios";

const editAddress = (authToken, address) =>
	axios.post(
		`http://localhost:5000/api/users/addresses/${address._id}`,
		{ address },
		{ headers: { authorization: authToken } }
	);

export { editAddress };
