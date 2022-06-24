import { getCartItemsData, getCartItemsTotal } from "utils";

const cartActionTypes = {
	INIT_CART_ITEMS: "INIT_CART_ITEMS",
	INIT_CART_FAILURE: "INIT_CART_FAILURE",
	SET_CART_ITEMS: "SET_CART_ITEMS",
	SET_COUPON_OPTIONS_MODAL_VISIBILITY: "SET_COUPON_OPTIONS_MODAL_VISIBILITY",
	SET_SELECTED_COUPON: "SET_SELECTED_COUPON",
	SET_CHECKOUT_DATA: "SET_CHECKOUT_DATA",
	SET_CHECKOUT_ADDRESS: "SET_CHECKOUT_ADDRESS",
};

export const couponOptions = [
	{
		id: 1,
		coupon: "10% off on orders above ₹999",
		discount: 10,
		minValue: 999,
	},
	{
		id: 2,
		coupon: "20% off on orders above ₹1999",
		discount: 20,
		minValue: 1999,
	},
];

const cartReducerFunction = (
	prevCartState,
	{
		type,
		payload: {
			cartItems,
			error,
			loading,
			modalVisibility,
			selectedCoupon,
			checkoutData,
			address,
		},
	}
) => {
	switch (type) {
		case cartActionTypes.INIT_CART_ITEMS:
			return {
				...prevCartState,
				cartItems,
				error,
				loading,
				couponOptionsModalVisibility: false,
				selectedCoupon: null,
				checkoutData: null,
			};

		case cartActionTypes.INIT_CART_FAILURE:
			return {
				...prevCartState,
				error,
				loading,
			};

		case cartActionTypes.SET_CART_ITEMS:
			return {
				...prevCartState,
				cartItems,
				error,
				loading,
			};

		case cartActionTypes.SET_COUPON_OPTIONS_MODAL_VISIBILITY:
			return {
				...prevCartState,
				couponOptionsModalVisibility: modalVisibility,
			};

		case cartActionTypes.SET_SELECTED_COUPON:
			return {
				...prevCartState,
				selectedCoupon: couponOptions.find(
					(option) => option.id === selectedCoupon
				),
			};

		case cartActionTypes.SET_CHECKOUT_DATA:
			return {
				...prevCartState,
				checkoutData,
			};

		case cartActionTypes.SET_CHECKOUT_ADDRESS:
			return {
				...prevCartState,
				checkoutData: { ...prevCartState.checkoutData, address },
			};

		default:
			return { ...prevCartState };
	}
};

export { cartReducerFunction };
