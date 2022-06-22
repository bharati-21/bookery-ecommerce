import React, { useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Close, Search } from "@mui/icons-material";

import { useAuth, useCart, useFilter, useWishList } from "contexts";
import { getCartItemsTotal } from "utils";
import { useOutsideClick, useToast } from "custom-hooks";
import { AccountOptions } from "components";
import "./navbar.css";

const Navbar = () => {
	const { authState } = useAuth();
	const { isAuth } = authState;
	const navigate = useNavigate();
	const location = useLocation();
	const {
		wishListState: { wishListItems },
	} = useWishList();
	const {
		cartState: { cartItems },
	} = useCart();

	const {
		filterState: { searchText },
		filterDispatch,
	} = useFilter();

	const drawerReference = useRef(null);

	const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
	const [showSearchDrawer, setShowSearchDrawer] = useState(false);

	const handleNavbarStateChange = (e) => {
		e.stopPropagation();
		setMobileNavbarOpen((prevMovileNavbarOpen) => !prevMovileNavbarOpen);
	};

	const handleShowSearchDrawerChange = (isShown) => {
		setShowSearchDrawer(isShown);
	};

	const navigateToProducts = (event) => {
		event.preventDefault();
		if (searchText.trim() !== "" && location.pathName !== "/products") {
			navigate("/products");
		}
		handleShowSearchDrawerChange(false);
	};

	const handleChangeSearchText = (event) => {
		filterDispatch({
			filterType: "SET_SEARCH_TEXT",
			filterPayload: event.target.value,
		});
		if (searchText.trim() !== "" && location.pathName !== "/products") {
			navigate("/products");
		}
	};

	const totalCartItems = isAuth
		? cartItems?.length
			? getCartItemsTotal(cartItems, "TOTAL_ITEMS")
			: 0
		: 0;
	const totalWishListItems = isAuth
		? wishListItems?.length
			? wishListItems.length
			: 0
		: 0;

	useOutsideClick(drawerReference, () => setMobileNavbarOpen(false));

	return (
		<nav className="navbar">
			<div className="navbar-wrapper flex-row flex-align-center mx-auto flex-justify-between">
				<button
					className="hamburger btn btn-link nav-link"
					onClick={handleNavbarStateChange}
				>
					<i className="fa-solid fa-bars fa-icon"></i>
				</button>
				<h4 className="logo flex-col flex-align-center flex-justify-center">
					<Link to="/" className="nav-link btn btn-link">
						Bookery
					</Link>
				</h4>
				<ul className="navlinks desktop-navbar flex-align-center list list-inline">
					<li className="list-item">
						<NavLink
							to="/"
							className="nav-link main-nav-link btn btn-link flex-col flex-align-center flex-justify-center"
						>
							Home
						</NavLink>
					</li>
					<li className="list-item">
						<NavLink
							to="/products"
							className="nav-link main-nav-link btn btn-link flex-col flex-align-center flex-justify-center"
						>
							Shop
						</NavLink>
					</li>
				</ul>
				<div
					className={`mobile-navbar-drawer ${
						mobileNavbarOpen ? "navbar-open" : "navbar-close"
					}`}
				>
					<ul
						className="navlinks-mobile list-style-none flex-col flex-align-start flex-justify-start py-2 px-2"
						ref={drawerReference}
					>
						<li className="list-item py-1-5">
							<h3 className="flex-col flex-align-start flex-justify-center">
								<Link
									to="/"
									className="logo nav-link btn btn-link"
								>
									Bookery
								</Link>
							</h3>
						</li>
						<li className="list-item py-1-5">
							<NavLink
								to="/"
								className="nav-link main-nav-link btn btn-link flex-col flex-align-center flex-justify-center text-xs"
							>
								Home
							</NavLink>
						</li>
						<li className="list-item py-1-5">
							<NavLink
								to="/products"
								className="nav-link main-nav-link btn btn-link flex-col flex-align-center flex-justify-center text-xs"
							>
								Shop
							</NavLink>
						</li>
					</ul>
				</div>

				<div
					className={`search-container ${
						showSearchDrawer
							? "show-search-drawer"
							: "hide-search-drawer"
					}`}
				>
					<button
						className="btn btn-icon"
						onClick={() => handleShowSearchDrawerChange(false)}
					>
						<Close className="close-icon" />
					</button>
					<h2 className="search-container-head">Welcome</h2>
					<p>What book are you in the mood for today?</p>
					<form onSubmit={navigateToProducts}>
						<div className="input-group input-search-group input-default input-inline">
							<label
								className="text-label flex-row flex-align-center flex-justify-between p-0-5 px-0-5"
								htmlFor="input-inline-search"
							>
								<input
									type="search"
									id="input-inline-search"
									className="px-0-25 input-text text-reg"
									placeholder="Search books by name or author..."
									value={searchText}
									onChange={handleChangeSearchText}
								/>
								<button
									type="submit"
									className="btn btn-icon btn-search-submit flex-row flex-align-center"
								>
									<Search className="mobile-search-icon" />
								</button>
							</label>
							<span className="text-message mt-0-5"></span>
						</div>
					</form>
				</div>

				<ul className="navlinks list list-inline flex-align-center">
					<li className="list-item flex-col flex-align-center flex-justify-center">
						<button
							className="btn btn-link nav-link"
							onClick={() => handleShowSearchDrawerChange(true)}
						>
							<i className="fa-solid fa-magnifying-glass fa-icon"></i>
						</button>
					</li>

					<li className="list-item badge-container flex-col flex-align-center flex-justify-center">
						<div className="badge-icon">
							<Link
								to="/cart"
								className="nav-link btn btn-link flex-col flex-align-center flex-justify-center"
							>
								<i className="fa-solid fa-cart-shopping fa-icon"></i>
							</Link>
						</div>
						<span className="badge-status badge-primary badge-notification p-0-25 flex-col flex-align-center flex-justify-center">
							{totalCartItems > 9 ? "9+" : totalCartItems}
						</span>
					</li>
					<li className="list-item badge-container flex-col flex-align-center flex-justify-center">
						<div className="badge-icon">
							<Link
								to="/wishlist"
								className="nav-link btn btn-link flex-col flex-align-center flex-justify-center"
							>
								<i className="fa-solid fa-heart fa-icon"></i>
							</Link>
						</div>
						<span className="badge-status badge-primary badge-notification p-0-25 flex-col flex-align-center flex-justify-center">
							{totalWishListItems > 9 ? "9+" : totalWishListItems}
						</span>
					</li>
					<AccountOptions />
				</ul>
			</div>
		</nav>
	);
};

export { Navbar };
