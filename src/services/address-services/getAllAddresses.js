import axios from "axios";

const getAllAddresses = (authToken) =>
	axios.get("/api/user/addresses", { headers: { authorization: authToken } });

export { getAllAddresses };
