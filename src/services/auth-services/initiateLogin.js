import axios from "axios";

const initiateLogin = (formData) =>
	axios.post("https://bookery-server.herokuapp.com/api/auth/login", {
		data: { ...formData },
	});

export { initiateLogin };
