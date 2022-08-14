import axios from "axios";

const initiateLogin = (formData) =>
	axios.post("http://localhost:5000/api/auth/login", {
		data: { ...formData },
	});

export { initiateLogin };
