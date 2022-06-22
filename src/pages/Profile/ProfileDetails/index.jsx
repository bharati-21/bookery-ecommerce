import React from "react";

import { useAuth } from "contexts";
import ProfileCSS from "../Profile.module.css";

const ProfileDetails = () => {
	const { profileDetails } = ProfileCSS;
	const {
		authState: { user },
	} = useAuth();
	return (
		<ul
			className={`flex-col flex-justify-center flex-align-start ${profileDetails} list-spaced list-style-none mt-2`}
		>
			<li className="list-item flex-row flex-align-center flex-justify-start">
				<h6>Full Name:</h6>
				<span>{`${user.firstName} ${user.lastName}`}</span>
			</li>
			<li className="list-item flex-row flex-align-center flex-justify-start">
				<h6>Email:</h6>
				<span>{`${user.email}`}</span>
			</li>
		</ul>
	);
};

export { ProfileDetails };
