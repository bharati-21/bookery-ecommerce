import axios from "axios";

const deleteAddress = (authToken, addressId) =>
	axios.delete(`https://bookery-server.herokuapp.com/api/users/addresses/${addressId}`, {
		headers: { authorization: authToken },
	});

export { deleteAddress };
