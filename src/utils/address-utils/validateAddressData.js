const validateAddressData = (formData, formDataErrorDispatch) => {
	const { name, addressLine, city, state, pincode, phoneNumber } = formData;

	if (name.trim().length < 2) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "nameError",
				value: "Enter a valid name. Should contain at least 2 characters.",
			},
		});
		return false;
	}

	if (!name.trim().length || !/^[A-Za-z]+(\s*[A-Za-z])*$/.test(name)) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "nameError",
				value: "Enter a valid name. Should contain only letters.",
			},
		});
		return false;
	}

	if (addressLine.trim().length < 10) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "addressLineError",
				value: "Enter a valid address. Should contain at least 10 characters.",
			},
		});
		return false;
	}

	if (city.trim().length < 2) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "cityError",
				value: "Enter a valid city name. Should contain at least 2 characters.",
			},
		});
		return false;
	}

	if (!city.trim().length || !/^[A-Za-z]+(\s*[\w*,*])*$/.test(city)) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "cityError",
				value: "Enter a valid city name. Should contain only letters.",
			},
		});
		return false;
	}

	if (state.trim().length < 2) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "stateError",
				value: "Enter a valid state name. Should contain at least 2 characters.",
			},
		});
		return false;
	}

	if (!state.trim().length || !/^[A-Za-z]+(\s*\w*,*.*)*$/.test(state)) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "stateError",
				value: "Enter a valid state name. Should contain only letters.",
			},
		});
		return false;
	}

	if (!pincode.toString().trim().length || !/^[1-9]\d{5}$/.test(pincode)) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "pincodeError",
				value: "Enter a valid pincode. Should contain only 6 numbers.",
			},
		});
		return false;
	}

	if (
		!phoneNumber.toString().trim().length ||
		!/^(0|\+91)?[6-9]\d{9}$/.test(phoneNumber)
	) {
		formDataErrorDispatch({
			type: "SET_ERROR",
			payload: {
				name: "phoneNumberError",
				value: "Enter a valid phone number. A valid phone number contains 10 digits and begins with 6,7,8 or 9.",
			},
		});
		return false;
	}

	return true;
};

export { validateAddressData };
