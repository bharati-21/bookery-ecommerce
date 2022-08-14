import axios from "axios";

const getAllAddresses = (authToken) =>
	axios.get("https://bookery-server.herokuapp.com/api/users/addresses", {
		headers: { authorization: authToken },
	});

export { getAllAddresses };
