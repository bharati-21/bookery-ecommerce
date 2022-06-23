import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { useAuth, useCart, useOrders } from "contexts";
import ProfileCSS from "pages/Profile/Profile.module.css";
import { clearCartItems, postNewOrder } from "services";
import bookeryIcon from "assets/images/bookery-icon.png";
import { useToast } from "custom-hooks";

const RAZORPAY_URL = "https://checkout.razorpay.com/v1/checkout.js";

const handleLoadScript = (src) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			reject(false);
		};
		document.body.appendChild(script);
	});
};

const CheckoutSummary = () => {
	const {
		cartState: { checkoutData, selectedCoupon },
		cartDispatch,
	} = useCart();

	const navigate = useNavigate();
	const {
		authState: { token, user },
	} = useAuth();

	const { ordersDispatch } = useOrders();
	const { addressCityState, addressItem } = ProfileCSS;
	const { showToast } = useToast();

	const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);

	const placeOrder = async (order) => {
		let orderId = uuid();
		orderId =
			orderId.split("-")?.length >= 3
				? orderId.split("-").slice(0, 3).join("-")
				: orderId;

		setIsOngoingNetworkCall(true);

		try {
			const {
				data: { orders },
			} = await postNewOrder(token, {
				...order,
				orderId,
				selectedCoupon,
			});
			ordersDispatch({
				type: "SET_ORDERS",
				payload: { orders },
			});
			showToast("Placed order successfully!", "success");

			const {
				data: { cart },
			} = await clearCartItems(token);

			cartDispatch({
				type: "INIT_CART_ITEMS",
				payload: {
					carItems: cart,
					loading: false,
					error: null,
				},
			});

			navigate(`/order-summary/${orderId}`);
		} catch (error) {
			setIsOngoingNetworkCall(false);
			showToast(
				"Failed to place order. Please try again later.",
				"error"
			);
		}
	};

	const handleShowRazorPay = async () => {
		const response = await handleLoadScript(RAZORPAY_URL);

		if (!response) {
			showToast(
				"Could not load razorpay payment options. Please try again later.",
				"error"
			);
			return;
		}

		var options = {
			key: process.env.REACT_APP_RAZORPAY_KEY,
			amount: checkoutData?.price * 100,
			currency: "INR",
			name: "Bookery",
			description: "Thank you for shopping!",
			image: bookeryIcon,

			handler: async function (response) {
				const { razorpay_payment_id } = await response;
				const order = {
					razorpayPaymentId: razorpay_payment_id,
					...checkoutData,
				};
				placeOrder(order);
			},
			prefill: {
				name: checkoutData?.address?.name,
				email: user?.email,
				contact: checkoutData?.address?.phoneNumber,
			},
			theme: { color: "#3399cc" },
		};

		const paymentObject = new Razorpay(options);
		paymentObject.open();
	};

	return (
		<section className="checkout-container checkout-order p-2 flex-col flex-align-start flex-justify-start">
			<div className="flex-col mb-1-5 order-details">
				<h6 className="section-head pb-0-5 text-left">Order Details</h6>
				<div className="flex-row order-items-head flex-justify-between flex-align-center pt-0-75 pb-0-25">
					<h6 className="item-head">Item</h6>
					<h6 className="item-head text-right">Quantity</h6>
				</div>
				{checkoutData?.items?.map((item) => (
					<div
						className="flex-row order-item flex-justify-between flex-align-start py-0-25"
						key={item.id}
					>
						<p className="text-reg item-head">{item.title}</p>
						<p className="text-reg item-content text-right">
							{item.qty}
						</p>
					</div>
				))}
			</div>
			<div className="flex-col mb-1-5 order-details">
				<h6 className="section-head pb-0-5 text-left">Price Details</h6>
				<div className="flex-row order-items-head flex-justify-between flex-align-center pt-0-75 pb-0-25">
					<h6 className="item-head">Total</h6>
					<h6 className="item-head text-right">
						₹ {checkoutData?.price}
					</h6>
				</div>
			</div>
			<div className="flex-col order-details">
				<h6 className="section-head text-left pb-0-5">
					Delivery Details
				</h6>
				<div className="flex-row order-items-head flex-justify-between flex-align-center pt-0-75 pb-0-25">
					{!checkoutData?.address ? (
						<h6 className="item-head">
							Delivery details not selected
						</h6>
					) : (
						<div
							className={`${addressItem} flex-col flex-align-start flex-justify-center text-left`}
						>
							<h6 className="item-head">
								{checkoutData?.address.name}
							</h6>
							<span>{checkoutData?.address.addressLine}</span>
							<div
								className={`${addressCityState} flex-row flex-justify-start flex-align-center`}
							>
								<span>{checkoutData?.address.city},</span>
								<span>{checkoutData?.address.state},</span>
								<span>{checkoutData?.address.pincode}</span>
							</div>
							<span>{checkoutData?.address.phoneNumber}</span>{" "}
						</div>
					)}
				</div>
			</div>
			<button
				className="btn btn-full-width mt-1  py-0-25 px-0-5 text-reg"
				disabled={
					checkoutData?.address ? false : true || isOngoingNetworkCall
				}
				onClick={handleShowRazorPay}
			>
				Place Order
			</button>
		</section>
	);
};

export { CheckoutSummary };
