import axios from "axios";

const deleteAddress = (authToken, addressId) =>
	axios.delete(
		`${process.env.REACT_APP_API_URL}/users/addresses/${addressId}`,
		{
			headers: { authorization: authToken },
		}
	);

export { deleteAddress };
