import axios from "axios";

const deleteAddress = (authToken, addressId) =>
	axios.delete(`/api/user/address/${addressId}`, {
		headers: { authorization: authToken },
	});

export { deleteAddress };
