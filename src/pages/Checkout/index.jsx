import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "contexts/";
import { useDocumentTitle } from "custom-hooks";
import { AddressList } from "./AddressList";
import { CheckoutSummary } from "./CheckoutSummary";
import "./checkout.css";

const Checkout = () => {
	const {
		cartState: { checkoutData },
	} = useCart();

	const navigate = useNavigate();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("Bookery | Checkout");
		if (!checkoutData) {
			navigate("/products");
		}
	}, []);

	return checkoutData ? (
		<main className="main checkout-main my-2 mx-auto px-3 py-2">
			<h2 className="main-head mb-2 py-0-25 text-center flex-row flex-align-center flex-justify-center">
				Checkout
			</h2>
			<section className="checkout-wrapper mx-auto">
				<AddressList />
				<CheckoutSummary />
			</section>
		</main>
	) : null;
};

export { Checkout };
