import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { CartList, CartSummary } from "components";
import { useCart } from "contexts/";
import { useDocumentTitle } from "custom-hooks";
import loadingImage from "assets/images/loader.svg";
import "./Cart.css";

const Cart = () => {
	const {
		cartState: { cartItems, loading, error },
	} = useCart();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("Bookery | Cart");
	}, []);

	return (
		<main className="main cart-main my-2 mx-auto px-3 py-2">
			{loading ? (
				<img
					src={loadingImage}
					alt="Loading svg"
					className="img img-responsive mx-auto loader-img"
				/>
			) : error ? (
				<h1 className="error text error-color my-2 text-center loader-error">
					{error}
				</h1>
			) : (
				<>
					{cartItems?.length ? (
						<>
							<h2 className="main-head mb-2 py-0-25 text-center">
								My Cart Items
							</h2>
							<section className="cart-wrapper mx-auto">
								<CartList />
								<CartSummary cartItems={cartItems} />
							</section>
						</>
					) : (
						<h3 className="text-center span-grid-row">
							Your Cart is Empty
						</h3>
					)}
					<h6>
						<Link
							to="/products"
							className="btn btn-primary py-0-5 px-0-75 mt-3 mx-auto"
						>
							Shop for books!
						</Link>
					</h6>
				</>
			)}
		</main>
	);
};

export { Cart };
