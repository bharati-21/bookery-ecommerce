const dummyAddressData = {
	name: "Jane Doe",
	addressLine: "Opposite Avenue Hotel, Kandivali East",
	city: "Mumbai",
	state: "Maharashtra",
	pincode: "400101",
	phoneNumber: "7589814567",
};

const formDataReducerFunction = (state, { type, payload }) => {
	switch (type) {
		case "SET_FORM_DATA":
			return { ...state, [payload.name]: payload.value };
		case "SET_DUMMY_ADDRESS":
			return { ...dummyAddressData };
	}
};

export { formDataReducerFunction };
