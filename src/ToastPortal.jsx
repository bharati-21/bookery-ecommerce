import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom";

const ToastPortal = () => {
	return ReactDOM.createPortal(
		<ToastContainer
			theme="colored"
			position="top-right"
			autoClose={1500}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>,
		document.getElementById("toast-container")
	);
};

export default ToastPortal;
