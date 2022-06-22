import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useCart, useAddress } from "contexts/";
import { CouponOptions } from "pages";
import { getCartItemsData } from "utils/";

const CartSummary = () => {
	const {
		cartState: { cartItems, selectedCoupon },
		cartDispatch,
		couponOptions,
	} = useCart();

	const { addresses } = useAddress();

	const leastCouponValue = couponOptions.reduce(
		(accum, option) => (option.minValue < accum ? option.minValue : accum),
		Number.MAX_VALUE
	);

	const {
		cartItemsTotalPrice,
		cartItemsTotalSavingPrice,
		cartItemsTotalOriginalPrice,
		deliveryChargesApplicable,
		numCartItemsTotal,
	} = getCartItemsData(cartItems);

	const deliveryCharges = deliveryChargesApplicable ? (
		<p className="text-reg item-content">₹ 49</p>
	) : (
		<p className="text-reg item-content">FREE</p>
	);

	const isAnyCouponSelected = selectedCoupon ?? false;

	const couponDiscountPrice = Math.round(
		(selectedCoupon?.discount / 100) * cartItemsTotalPrice
	);

	const priceAfterCouponApplied = Math.round(
		cartItemsTotalPrice - (selectedCoupon ? couponDiscountPrice : 0)
	);

	const handleRemoveCoupon = () => {
		cartDispatch({
			type: "SET_SELECTED_COUPON",
			payload: { selectedCoupon: null },
		});
	};

	useEffect(() => {
		if (selectedCoupon && cartItemsTotalPrice <= selectedCoupon?.minValue) {
			handleRemoveCoupon();
		}
	}, [cartItemsTotalPrice]);

	const handleCheckout = () => {
		cartDispatch({
			type: "SET_CHECKOUT_DATA",
			payload: {
				checkoutData: {
					items: [...cartItems],
					price: isAnyCouponSelected
						? priceAfterCouponApplied
						: cartItemsTotalPrice,
					address: addresses?.length ? { ...addresses[0] } : null,
				},
			},
		});
	};

	return (
		<section className="checkout-container p-2 flex-col flex-align-center flex-justify-start">
			<h4 className="section-head pb-1 text-center">
				Price Details
				<p className="text-reg">
					({numCartItemsTotal}{" "}
					{numCartItemsTotal !== 1 ? "items" : "item"})
				</p>
			</h4>
			{cartItemsTotalPrice > leastCouponValue ? <CouponOptions /> : null}
			<article className="payment-details">
				<div className="flex-col py-1-5">
					<div className="flex-row total-original-price flex-justify-between flex-align-center py-0-25">
						<p className="text-reg item-head">Total Price</p>
						<p className="text-reg item-content">
							₹ {cartItemsTotalOriginalPrice}
						</p>
					</div>
					<div className="flex-row total-saving-price flex-justify-between flex-align-center py-0-25">
						<p className="text-reg item-head">Discount</p>
						<p className="text-reg item-content">
							- ₹ {cartItemsTotalSavingPrice}
						</p>
					</div>
					<div className="flex-row delivery-charges flex-justify-between flex-align-center py-0-25">
						<p className="text-reg item-head">Delivery Charges</p>
						{deliveryCharges}
					</div>
				</div>
				{isAnyCouponSelected ? (
					<div className="total-charges flex-col pb-1">
						<div className="pt-1 flex-row flex-justify-between flex-align-center">
							<p className="text-reg item-head">Total</p>
							<p className="text-reg item-content">
								₹ {cartItemsTotalPrice}
							</p>
						</div>
						<div className="coupon-data flex-row flex-justify-between flex-align-center">
							<p className="text-reg item-head flex-row flex-justify-start flex-align-center">
								<span>
									Coupon {selectedCoupon.discount}% off
								</span>
								<button
									className="btn btn-primary btn-outline px-0-25 text-sm"
									onClick={handleRemoveCoupon}
								>
									Remove
								</button>
							</p>
							<p className="text-reg item-content">
								- ₹ {couponDiscountPrice}
							</p>
						</div>
					</div>
				) : null}

				<div className="total-charges pt-1 flex-row flex-justify-between flex-align-center">
					<p className="text-lg item-head">Subtotal</p>
					<p className="text-lg item-content">
						₹ {priceAfterCouponApplied}
					</p>
				</div>

				<Link
					className="btn btn-full-width mt-1  py-0-25 px-0-5 text-reg"
					onClick={handleCheckout}
					to="/checkout"
				>
					Checkout
				</Link>
			</article>
		</section>
	);
};

export { CartSummary };
