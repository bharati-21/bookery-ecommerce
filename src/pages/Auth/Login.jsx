import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { initiateLogin } from "services";
import { useAuth, useCart, useOrders, useWishList } from "contexts/";
import { useDocumentTitle, useToast } from "custom-hooks";
import "./auth.css";

const Login = () => {
	const initialFormData = {
		email: "",
		password: "",
		rememberMe: false,
	};
	const [formData, setFormData] = useState(initialFormData);
	const [showPassword, setShowPassword] = useState(false);
	const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	const {
		setAuthState,
		authState: { isAuth },
	} = useAuth();
	const { cartDispatch } = useCart();
	const { wishListDispatch } = useWishList();
	const { showToast } = useToast();
	const { ordersDispatch } = useOrders();
	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		if (isAuth) {
			navigate(location?.state?.from ?? -1, { replace: true });
		}
		setDocumentTitle("Bookery | Login");
	}, []);

	const handleFormDataChange = (event) => {
		const { name, value, checked } = event.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: name === "rememberMe" ? checked : value,
		}));
	};

	const showPasswordIcon = showPassword ? (
		<VisibilityOffIcon />
	) : (
		<VisibilityIcon />
	);

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		setIsOngoingNetworkCall(true);

		try {
			const { data } = await initiateLogin(formData);
			showToast("Login Successful!", "success");
			const {
				user: {
					token,
					cart: cartItems,
					wishlist,
					orders,
					address,
					...otherUserDetails
				},
			} = data;
			setAuthState({
				isAuth: true,
				token,
				user: { ...otherUserDetails },
			});

			cartDispatch({ type: "INIT_CART_ITEMS", payload: { cartItems } });
			wishListDispatch({
				type: "INIT_WISHLIST_ITEMS",
				payload: {
					wishListItems: wishlist,
					error: null,
					loading: false,
				},
			});
			ordersDispatch({
				type: "SET_ORDERS",
				payload: { orders },
			});

			if (rememberMe) {
				localStorage.setItem("bookery-token", token);
				localStorage.setItem(
					"bookery-user",
					JSON.stringify(otherUserDetails)
				);
			}
			navigate(location?.state?.from ?? -1, { replace: true });
		} catch (error) {
			showToast("Login Failed. Please try again later", "error");
			setIsOngoingNetworkCall(false);
		}
	};

	const { email, password, rememberMe } = formData;
	const handleChangePasswordVisibility = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleLoginWithTestCredentials = (event) => {
		setFormData({
			email: process.env.REACT_APP_GUEST_USER_EMAIL,
			password: process.env.REACT_APP_GUEST_USER_PASSWORD,
			rememberMe: true,
		});
	};

	return (
		<section className="auth-main flex-col flex-align-center flex-justify-center mx-auto py-2 px-3">
			<div className="auth-wrapper">
				<section className="auth-container login-container mx-auto mb-1 px-1-5 py-2">
					<h3 className="text-center text-uppercase auth-head mb-1">
						Login
					</h3>
					<form
						className="auth-form px-1 flex-col flex-align-center flex-justify-center"
						onSubmit={handleFormSubmit}
					>
						<div className="input-group input-default mx-auto">
							<label
								className="text-label text-reg flex-col mx-auto"
								htmlFor="input-login-email"
							>
								Email
								<input
									type="email"
									name="email"
									id="input-login-email"
									className="input-text text-sm px-0-75 py-0-25 mt-0-25"
									placeholder="janedoe@gmail.com"
									value={email}
									onChange={handleFormDataChange}
									required
								/>
							</label>
							<span className="text-message mt-0-5 text-xs"></span>
						</div>
						<div className="input-group input-default mx-auto">
							<label
								className="text-label text-reg flex-col mx-auto text-sm"
								htmlFor="input-login-psd"
							>
								Password
								<span className="password-input-toggler">
									<input
										type={`${
											showPassword ? "text" : "password"
										}`}
										id="input-login-psd"
										className="input-text px-0-75 py-0-25 mt-0-25 text-sm"
										placeholder="********"
										name="password"
										value={password}
										onChange={handleFormDataChange}
										autoComplete="off"
										required
									/>
									<button
										type="button"
										className={`btn btn-icon icon-show-psd ${
											isOngoingNetworkCall &&
											"btn-disabled"
										}`}
										disabled={isOngoingNetworkCall}
										onClick={handleChangePasswordVisibility}
									>
										<span className="icon mui-icon">
											{showPasswordIcon}
										</span>
									</button>
								</span>
							</label>
							<span className="text-message text-xs mt-0-5"></span>
						</div>
						<div className="psd-mgmt-container flex-row flex-align-center flex-justify-between flex-wrap my-0-5">
							<label
								htmlFor="checkbox-remember"
								className="flex-row input-checkbox-remember flex-align-center text-sm"
							>
								<input
									type="checkbox"
									className="input-checkbox text-reg"
									name="rememberMe"
									id="checkbox-remember"
									checked={rememberMe}
									onChange={handleFormDataChange}
								/>
								Remember me
							</label>
						</div>
						<div className="auth-button-container flex-col flex-align-center">
							<div className="login-button-container flex-col flex-align-center flex-justify-center">
								<input
									type="submit"
									className={`btn btn-primary btn-full-width px-0-75 py-0-25 btn-full-width text-reg ${
										isOngoingNetworkCall && "btn-disabled"
									}`}
									value="Login"
									disabled={isOngoingNetworkCall}
								/>
								<input
									type="submit"
									className={`btn btn-primary btn-outline btn-full-width px-0-75 py-0-25 btn-full-width text-reg ${
										isOngoingNetworkCall && "btn-disabled"
									}`}
									value="Login with Test Credentials"
									disabled={isOngoingNetworkCall}
									onClick={handleLoginWithTestCredentials}
								/>
							</div>
							<Link
								to="/signup"
								className={`btn btn-link btn-primary mt-0-75 flex-row flex-justify-center flex-align-center ${
									isOngoingNetworkCall && "link-disabled"
								}`}
							>
								Create a new account
								<span className="icon mui-icon icon-chevron-right">
									<ChevronRightIcon />
								</span>
							</Link>
						</div>
					</form>
				</section>
			</div>
		</section>
	);
};

export { Login };
