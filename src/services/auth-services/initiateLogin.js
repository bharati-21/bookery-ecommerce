import axios from "axios";

const initiateLogin = (formData) =>
	axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
		data: { ...formData },
	});

export { initiateLogin };
