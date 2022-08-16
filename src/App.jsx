/* Style imports */
import "./styles/styles.css";

/* Component imports */
import { Navbar, Footer } from "./components";
import { Routes } from "./routes/WebsiteRoutes";
import { useAuth } from "contexts";

/* External Imports */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
	const location = useLocation();
	const { logoutUser } = useAuth();
	const { navigate } = useNavigate();

	const handleScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		axios.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error?.response?.status === 401) {
					logoutUser();
					navigate("/login");
				}
				return Promise.reject(error);
			}
		);
	}, []);

	useEffect(() => {
		handleScrollToTop();
	}, [location.pathname]);

	return (
		<div className="App">
			<button className="btn btn-floating" onClick={handleScrollToTop}>
				<span className="icon">
					<i className="fas fa-arrow-up fa-icon"></i>
				</span>
			</button>
			<Navbar />
			<Routes />
			<Footer />
		</div>
	);
}

export default App;
