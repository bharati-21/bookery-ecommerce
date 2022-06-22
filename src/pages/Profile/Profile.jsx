import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { useDocumentTitle } from "custom-hooks";
import ProfileCSS from "./Profile.module.css";

const Profile = () => {
	const { profileTabItem, activeLink, tabName, tabsWrapper, profileMain } =
		ProfileCSS;

	const tabs = [
		{
			_id: uuid(),
			tabName: "Profile",
			linkTo: "/profile",
		},
		{
			_id: uuid(),
			tabName: "Address",
			linkTo: "/profile/address",
		},
		{
			_id: uuid(),
			tabName: "Orders",
			linkTo: "/profile/orders",
		},
	];

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("Bookery | Profile");
	}, []);

	const getActiveClass = ({ isActive }) =>
		isActive
			? `${profileTabItem} ${activeLink} text-center mx-auto`
			: `${profileTabItem} text-center mx-auto`;

	const tabsMapping = tabs.map((tab) => (
		<NavLink end key={tab._id} to={tab.linkTo} className={getActiveClass}>
			<h5 className={`${tabName} mx-auto`}>{tab.tabName}</h5>
		</NavLink>
	));

	return (
		<main className={`main ${profileMain} my-2 mx-auto px-3 py-2`}>
			<section
				className={`flex-col flex-align-center p-2 flex-justify-center text-center`}
			>
				<div
					className={`${tabsWrapper} pb-2 tabs-wrapper flex-row flex-align-center flex-justify-center`}
				>
					{tabsMapping}
				</div>
				<Outlet />
			</section>
		</main>
	);
};

export { Profile };
