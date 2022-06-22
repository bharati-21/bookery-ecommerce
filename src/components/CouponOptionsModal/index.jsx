import React, { useRef, useState } from "react";

import { useOutsideClick } from "custom-hooks";
import { useCart } from "contexts";
import { getCartItemsData } from "utils";

const CouponOptionsModal = () => {
	const {
		cartDispatch,
		couponOptions,
		cartState: { cartItems, selectedCoupon: previouslySelectedCoupon },
	} = useCart();

	const [selectedCoupon, setSelectedCoupon] = useState(
		previouslySelectedCoupon?.id ?? ""
	);

	const { cartItemsTotalPrice } = getCartItemsData(cartItems);

	const handleModalClose = () => {
		cartDispatch({
			type: "SET_COUPON_OPTIONS_MODAL_VISIBILITY",
			payload: { modalVisibility: false },
		});
	};

	const handleCouponValueChange = (event) => {
		setSelectedCoupon(Number(event.target.value));
	};

	const handleApplyCoupon = () => {
		cartDispatch({
			type: "SET_SELECTED_COUPON",
			payload: { selectedCoupon },
		});
		cartDispatch({
			type: "SET_COUPON_OPTIONS_MODAL_VISIBILITY",
			payload: { modalVisibility: false },
		});
	};

	const modalRef = useRef();
	useOutsideClick(modalRef, handleModalClose);

	return (
		<div
			className="coupon-options-modal flex-col flex-align-start p-1"
			ref={modalRef}
		>
			<div className="coupon-options-header flex-row flex-align-center flex-justify-between">
				<h5>Available Coupons</h5>
				<button
					className="btn btn-primary btn-icon"
					onClick={handleModalClose}
				>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</div>
			<div className="coupons-list flex-col flex-row flex-align-start flex-justify-center">
				{couponOptions.map((option) =>
					cartItemsTotalPrice > option.minValue ? (
						<label
							key={option.id}
							htmlFor={option.id}
							className="flex-row flex-align-center flex-justify-start coupon-label px-1 py-0-25"
						>
							<input
								type="radio"
								name="coupon"
								id={option.id}
								value={option.id}
								onChange={handleCouponValueChange}
								checked={selectedCoupon === option.id}
							/>
							{option.coupon}
						</label>
					) : null
				)}
			</div>
			<button
				className="btn btn-primary p-0-25 btn-apply-coupon"
				onClick={handleApplyCoupon}
			>
				Apply
			</button>
		</div>
	);
};

export { CouponOptionsModal };
