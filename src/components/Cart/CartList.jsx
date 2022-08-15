import React from "react";

import { useCart } from "contexts";
import { CartListItem } from "./CartListItem";

const CartList = () => {
	const {
		cartState: { cartItems },
	} = useCart();

	return (
		<section className="cart-list flex-col flex-align-center flex-justify-center">
			{cartItems.map((cartItem) => (
				<CartListItem cartItem={cartItem} key={cartItem._id} />
			))}
		</section>
	);
};

export { CartList };
