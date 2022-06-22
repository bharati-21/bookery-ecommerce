import React from "react";
import { Link } from "react-router-dom";

import NotFoundImage from "assets/images/not_found.svg";
import "./not-found.css";

const NotFound = () => {
	return (
		<main className="main not-found-main p-2 flex-col flex-align-center flex-justify-center">
			<h1>Page Not Found!</h1>
			<button className="btn btn px-1 py-0-25 text-lg">
				<Link to="/">Go Back Home</Link>
			</button>
			<img
				src={NotFoundImage}
				alt="Not Found Image"
				className="img-responsive not-found-img"
			/>
		</main>
	);
};

export { NotFound };
