import React from "react";

import { useCart } from "contexts";

const CouponOptions = () => {
	const { cartDispatch } = useCart();

	const handleShowViewCouponsModal = (event) => {
		event.stopPropagation();
		cartDispatch({
			type: "SET_COUPON_OPTIONS_MODAL_VISIBILITY",
			payload: { modalVisibility: true },
		});
	};

	return (
		<div className="coupon-options-container py-1-5 flex-row flex-justify-between flex-align-center">
			<h6 className="coupon-options-head">Coupons available</h6>
			<button
				className="btn btn-primary p-0-25"
				onClick={handleShowViewCouponsModal}
			>
				View Coupons
			</button>
		</div>
	);
};

export { CouponOptions };
