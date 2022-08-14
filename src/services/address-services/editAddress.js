import axios from "axios";

const editAddress = (authToken, address) =>
	axios.post(
		`https://bookery-server.herokuapp.com/api/users/addresses/${address._id}`,
		{ address },
		{ headers: { authorization: authToken } }
	);

export { editAddress };
