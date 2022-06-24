import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
	useAddress,
	useAuth,
	useCart,
	useFilter,
	useOrders,
	useWishList,
} from "contexts";
import { useOutsideClick, useToast } from "custom-hooks";

const AccountOptions = ({}) => {
	const { authState, setAuthState } = useAuth();
	const { addressDispatch } = useAddress();
	const { cartDispatch } = useCart();
	const { filterDispatch } = useFilter();
	const { ordersDispatch } = useOrders();
	const { wishListDispatch } = useWishList();
	const { isAuth } = authState;
	const { showToast } = useToast();
	const location = useLocation();
	const navigate = useNavigate();
	const [showAccountOptionsDrawer, setShowAccountOptionsDrawer] =
		useState(false);

	useEffect(() => {
		if (showAccountOptionsDrawer) setShowAccountOptionsDrawer(false);
	}, [location?.pathname]);

	const handleShowAccountOptionsChange = (event) => {
		event.stopPropagation();
		setShowAccountOptionsDrawer(
			(prevShowAccountOptions) => !prevShowAccountOptions
		);
	};

	const accountOptionsReference = useRef(null);
	useOutsideClick(accountOptionsReference, () =>
		setShowAccountOptionsDrawer(false)
	);

	const handleAuth = () => {
		if (isAuth) {
			localStorage.removeItem("bookery-token");
			localStorage.removeItem("bookery-user");
			setAuthState({ ...authState, isAuth: false, user: {} });
			addressDispatch({
				type: "SET_ADDRESSES",
				payload: { addresses: [] },
			});
			cartDispatch({
				type: "SET_CART_ITEMS",
				payload: {
					cartItems: [],
					error: null,
					loading: false,
				},
			});
			filterDispatch({ filterType: "CLEAR_FILTERS" });
			ordersDispatch({
				type: "SET_ORDERS",
				payload: { orders: [] },
			});
			wishListDispatch({
				type: "ADD_TO_WISHLIST",
				payload: {
					wishListItems: [],
					error: null,
					loading: false,
				},
			});
			showToast("Logged out successfully.", "success");
		}
		navigate("/login");
	};

	return (
		<li
			className="list-item
            flex-col
            flex-align-center
            flex-justify-center"
			ref={accountOptionsReference}
		>
			<button
				className="nav-link btn btn-link flex-col flex-align-center flex-justify-center"
				onClick={handleShowAccountOptionsChange}
			>
				<i className="fa-solid fa-user fa-icon"></i>
			</button>
			{showAccountOptionsDrawer ? (
				<ul className="account-details-options list list-style-none">
					<li className="list-item p-0-5">
						<Link className="btn btn-link text-reg" to="/profile">
							Profile
						</Link>
					</li>
					<li className="list-item p-0-5">
						<button
							className="btn btn-link text-reg"
							onClick={handleAuth}
						>
							{isAuth ? "Logout" : "Login"}
						</button>
					</li>
				</ul>
			) : null}
		</li>
	);
};

export { AccountOptions };
