import axios from "axios";

const initiateSignup = ({ firstName, lastName, email, password }) =>
	axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
		data: {
			firstName,
			lastName,
			email,
			password,
		},
	});

export { initiateSignup };
