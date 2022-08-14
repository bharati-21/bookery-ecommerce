import axios from "axios";

const getAllAddresses = (authToken) =>
	axios.get("http://localhost:5000/api/users/addresses", {
		headers: { authorization: authToken },
	});

export { getAllAddresses };
