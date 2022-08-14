import axios from "axios";

const deleteAddress = (authToken, addressId) =>
	axios.delete(`http://localhost:5000/api/users/addresses/${addressId}`, {
		headers: { authorization: authToken },
	});

export { deleteAddress };
