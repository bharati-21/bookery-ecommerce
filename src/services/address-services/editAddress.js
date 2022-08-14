import axios from "axios";

const editAddress = (authToken, address) =>
	axios.post(
		`/api/user/address/edit/${address._id}`,
		{ address },
		{ headers: { authorization: authToken } }
	);

export { editAddress };
