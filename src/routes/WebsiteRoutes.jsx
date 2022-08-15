/* External imports */
import { Routes, Route } from "react-router-dom";

/* Page imports */
import {
	LandingPage,
	Products,
	Cart,
	WishList,
	Signup,
	Login,
	ProductPageItem,
	Profile,
	ProfileDetails,
	Address,
	Checkout,
	OrderSummary,
	Orders,
} from "pages/";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { NotFound } from "components";

const WebsiteRoutes = () => {
	return (
		<Routes>
			<Route path="/products" element={<Products />} />
			<Route path="/products/:productId" element={<ProductPageItem />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<LandingPage />} />
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/wishlist" element={<WishList />} />
				<Route path="/profile" element={<Profile />}>
					<Route path="" element={<ProfileDetails />} />
					<Route path="address" element={<Address />} />
					<Route path="orders" element={<Orders />} />
				</Route>
			</Route>
			<Route path="/order-summary/:orderId" element={<OrderSummary />} />
		</Routes>
	);
};

export { WebsiteRoutes as Routes };
