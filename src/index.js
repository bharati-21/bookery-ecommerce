import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import ToastPortal from "ToastPortal";
import ModalPortal from "ModalPortal";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<StateProvider>
				<ToastPortal />
				<ModalPortal />
				<App />
			</StateProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
