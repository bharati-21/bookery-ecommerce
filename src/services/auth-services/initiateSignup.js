import axios from "axios";

const initiateSignup = ({ firstName, lastName, email, password }) =>
	axios.post("/api/auth/signup", {
		firstName,
		lastName,
		email,
		password,
	});

export { initiateSignup };
