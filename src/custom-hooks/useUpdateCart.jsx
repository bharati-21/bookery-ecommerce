import React from "react";

import { useToast } from "./useToast";
import { useCart, useAuth } from "contexts/";
import { updateProductInCart } from "services";

const useUpdateCart = () => {
	const { showToast } = useToast();
	const { cartDispatch } = useCart();
	const {
		authState: { token },
	} = useAuth();

	const callUpdateProductInCart = async (
		_id,
		operation,
		showToastAfterCall = true
	) => {
		try {
			const {
				data: { cart },
			} = await updateProductInCart(_id, token, operation);

			if (showToastAfterCall)
				showToast("Item quantity updated in cart!", "success");

			cartDispatch({
				type: "SET_CART_ITEMS",
				payload: {
					cartItems: cart,
					error: null,
					loading: false,
				},
			});
			return true;
		} catch (error) {
			showToast(
				"Failed to update item quantity in cart. Please try again later.",
				"error"
			);
		}
		return false;
	};

	return { callUpdateProductInCart };
};

export { useUpdateCart };
