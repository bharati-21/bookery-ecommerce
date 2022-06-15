import { createContext, useContext, useState } from "react";

const initialAuthState = {
	user: {},
	isAuth: false,
	token: "",
};

const AuthContext = createContext(initialAuthState);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
	const setInitialState = () => {
		const bookeryToken = localStorage.getItem("bookery-token");
		if (bookeryToken) {
			return {
				token: bookeryToken,
				isAuth: true,
				user: JSON.parse(localStorage.getItem("bookery-user")),
			};
		}
		return initialAuthState;
	};

	const [authState, setAuthState] = useState(setInitialState);

	return <Provider value={{ authState, setAuthState }}>{children}</Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
