import React from "react";
import { Link, useParams } from "react-router-dom";

import { useOrders } from "contexts";
import { OrderItem } from "components/";
import "./order-summary.css";
import loadingImage from "assets/images/loader.svg";

const OrderSummary = () => {
	const { orders, ordersLoading, ordersError } = useOrders();
	const { orderId } = useParams();
	const order = orders?.find((order) => order.orderId === orderId);

	return (
		<main className="main order-summary-main my-2 mx-auto">
			{ordersLoading ? (
				<img
					src={loadingImage}
					alt="Loading svg"
					className="img img-responsive mx-auto loader-img"
				/>
			) : ordersError ? (
				<h1 className="error text error-color my-2 text-center loader-error">
					{ordersError}
				</h1>
			) : (
				<section className="order-wrapper mx-auto">
					<div className="text-center">
						<h2 className="main-head mb-2">Order Summary</h2>
					</div>

					{order && Object.keys(order)?.length ? (
						<OrderItem order={order} />
					) : (
						<div className="text-center mt-2">
							<h4>Order not found!</h4>
							<Link
								to="/products"
								className="btn btn-primary p-0-25 mx-auto mt-1"
							>
								Shop more!
							</Link>
						</div>
					)}

					<Link
						to="/profile/orders"
						className="btn btn-primary p-0-25 mx-auto mt-2"
					>
						View all orders
					</Link>
				</section>
			)}
		</main>
	);
};

export { OrderSummary };
