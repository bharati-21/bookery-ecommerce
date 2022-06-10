import { useCart } from "contexts";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCSS from "pages/Profile/Profile.module.css";

const CheckoutSummary = () => {
	const {
		cartState: { checkoutData },
		cartDispatch,
	} = useCart();

	const navigate = useNavigate();

	const { addressCityState, addressItem } = ProfileCSS;

	const handlePlaceOrder = () => {
		alert("Placed order successfully! Payment Integration coming soon...");
		cartDispatch({
			type: "SET_CHECKOUT_DATA",
			payload: { checkoutData: null },
		});

		navigate("/products");
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
						className="flex-row order-item flex-justify-between flex-align-center py-0-25"
						key={item.id}
					>
						<p className="text-reg item-head">{item.item}</p>
						<p className="text-reg item-content text-right">
							{item.quantity}
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
				disabled={checkoutData?.address ? false : true}
				onClick={handlePlaceOrder}
			>
				Place Order
			</button>
		</section>
	);
};

export { CheckoutSummary };
