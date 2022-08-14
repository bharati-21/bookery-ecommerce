import axios from "axios";

const initiateSignup = ({ firstName, lastName, email, password }) =>
	axios.post("https://bookery-server.herokuapp.com/api/auth/signup", {
		data: {
			firstName,
			lastName,
			email,
			password,
		},
	});

export { initiateSignup };
