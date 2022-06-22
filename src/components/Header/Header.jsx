import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightAltSharp } from "@mui/icons-material";

import "./header.css";

const Header = () => {
	return (
		<header className="header parallax-image flex-row flex-align-center flex-justify-center">
			<section className="hero-content flex-col flex-justify-center flex-align-start py-5 px-3">
				<h2 className="hero-head text-light">
					One shop stop for all your book needs and moods.
				</h2>
				<h6 className="hero-cta mt-1">
					<Link
						to="/products"
						className="btn btn-primary btn-text-icon py-0-25 px-0-5 mt-1"
					>
						Shop Now!
						<span className="icon flex flex-col flex-align-center flex-justify-center">
							<ArrowRightAltSharp style={{ fontSize: "2rem" }} />
						</span>
					</Link>
				</h6>
			</section>
		</header>
	);
};

export { Header };
