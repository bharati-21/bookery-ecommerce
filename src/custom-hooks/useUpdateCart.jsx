import React from "react";

import { useToast } from "./useToast";
import { useCart, useAuth } from "contexts/";
import { updateProductInCart } from "utils";

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
			const productUpdatedInCart = await updateProductInCart(
				_id,
				token,
				operation
			);
			if (productUpdatedInCart) {
				if (showToastAfterCall)
					showToast("Item quantity updated in cart!", "success");
				cartDispatch({
					type: "SET_CART_ITEMS",
					payload: {
						cartItems: productUpdatedInCart,
						error: null,
						loading: false,
					},
				});
				return true;
			} else {
				if (showToastAfterCall)
					"Failed to update item quantity in cart. Please try again later.",
						"error";
				return false;
			}
		} catch (error) {
			if (showToastAfterCall)
				"Failed to update item quantity in cart. Please try again later.",
					"error";
		}
	};

	return { callUpdateProductInCart };
};

export { useUpdateCart };
