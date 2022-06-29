const isSignupDataValid = (
	firstName,
	lastName,
	password,
	confirmPassword,
	setFormDataError,
	setError
) => {
	let isValidData = true;
	const isMinPasswordLength = (password) => password.trim().length >= 7;
	const isMinNameLength = (name) => name.trim().length >= 2;

	const isPasswordValid = (passwordValue) =>
		/^(?=.{7,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!_*@#$%^&+=]).*$/.test(
			passwordValue
		);
	const isNameValid = (name) => /^[A-Za-z]{2,20}$/.test(name);

	if (!isMinNameLength(firstName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "firstNameError",
				errorValue:
					"Invalid first name. Name must have least 2 characters.",
			},
		});
		isValidData = false;
	}
	if (!isNameValid(firstName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "firstNameError",
				errorValue:
					"Invalid first name. Name should only contain letters.",
			},
		});
		isValidData = false;
	}

	if (!isMinNameLength(lastName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "lastNameError",
				errorValue:
					"Invalid first name. Name must have least 2 characters.",
			},
		});
		isValidData = false;
	}

	if (!isNameValid(lastName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "lastNameError",
				errorValue:
					"Invalid lastName name. Name should only contain letters.",
			},
		});
		isValidData = false;
	}

	if (!isMinPasswordLength(password)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "passwordError",
				errorValue:
					"Invalid password. Password must have at least 7 characters.",
			},
		});
		isValidData = false;
	}

	if (!isPasswordValid(password)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "passwordError",
				errorValue:
					"Invalid password. Password should have at least one uppercase, lowercase letter, number and special character.",
			},
		});
		isValidData = false;
	}

	if (!isMinPasswordLength(confirmPassword)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "confirmPasswordError",
				errorValue:
					"Invalid confirm password. Confirm password must have least 7 characters.",
			},
		});
		isValidData = false;
	}

	if (!isPasswordValid(confirmPassword)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "confirmPasswordError",
				errorValue:
					"Invalid confirm password. Password should have at least one uppercase, lowercase letter, number and special character.",
			},
		});
		isValidData = false;
	}

	if (password.trim() !== confirmPassword.trim()) {
		setError("Passwords do not match");
		isValidData = false;
	}
	return isValidData;
};

export { isSignupDataValid };
