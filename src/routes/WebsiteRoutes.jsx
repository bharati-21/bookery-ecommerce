/* External imports */
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

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
} from "pages/";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { NotFound } from "components";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductPageItem />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<ProfileDetails />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Route>
      <Route path="/order-summary/:orderId" element={<OrderSummary />} />
    </Routes>
  );
};

export { WebsiteRoutes as Routes };
