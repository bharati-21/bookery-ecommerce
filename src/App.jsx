/* Style imports */
import "./styles/styles.css";

/* Component imports */
import { Navbar, Footer } from "./components";
import { Routes } from "./routes/WebsiteRoutes";

/* External Imports */
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation();

	const handleScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		handleScrollToTop();
	}, [location.pathname]);

	return (
		<div className="App">
			<button class="btn btn-floating" onClick={handleScrollToTop}>
				<span class="icon">
					<i class="fas fa-arrow-up fa-icon"></i>
				</span>
			</button>
			<ToastContainer
				theme="colored"
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navbar />
			<Routes />
			<Footer />
		</div>
	);
}

export default App;
