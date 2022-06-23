import { getCartItemsTotal } from "./";

const getCartItemsData = (cartItems) => {
	let cartItemsTotalPrice = getCartItemsTotal(
		cartItems,
		"TOTAL_SELLING_PRICE"
	);
	const cartItemsTotalOriginalPrice = getCartItemsTotal(
		cartItems,
		"TOTAL_COST_PRICE"
	);
	const cartItemsTotalSavingPrice = getCartItemsTotal(
		cartItems,
		"TOTAL_DISCOUNT_PRICE"
	);
	const numCartItemsTotal = getCartItemsTotal(cartItems, "TOTAL_ITEMS");

	let deliveryChargesApplicable = false;
	if (cartItemsTotalPrice < 500) {
		cartItemsTotalPrice += 49;
		deliveryChargesApplicable = true;
	}

	return {
		cartItemsTotalPrice,
		cartItemsTotalSavingPrice,
		cartItemsTotalOriginalPrice,
		deliveryChargesApplicable,
		numCartItemsTotal,
	};
};

export { getCartItemsData };
