import axios from "axios";

const initiateSignup = ({ firstName, lastName, email, password }) =>
	axios.post("http://localhost:5000/api/auth/signup", {
		data: {
			firstName,
			lastName,
			email,
			password,
		},
	});

export { initiateSignup };
