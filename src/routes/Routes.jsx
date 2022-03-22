/* External imports */
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

/* Page imports */
import { LandingPage, Products, Cart, WishList, Signup, Login } from 'pages/';

const WebsiteRoutes = () => {
    return (
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mockman" element={<Mockman />} /> 
            <Route path="/" element={<LandingPage />} /> 
        </Routes>               
    );
}

export { WebsiteRoutes as Routes };