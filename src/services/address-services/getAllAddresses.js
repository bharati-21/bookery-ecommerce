import axios from "axios";

const getAllAddresses = (authToken) =>
	axios.get(`${process.env.REACT_APP_API_URL}/users/addresses`, {
		headers: { authorization: authToken },
	});

export { getAllAddresses };
