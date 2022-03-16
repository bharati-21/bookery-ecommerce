/* External imports */
import { Routes, Route } from 'react-router-dom';

/* Page imports */
import { LandingPage, Products, Cart, WishList, Signup, Login, Logout } from '../pages/';

const WebsiteRoutes = () => {
    return (
        <Routes>
            <Route path="/products" element={<Products  />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/wishlist" element={<WishList  />} />
            <Route path="/signup" element={<Signup  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/logout" element={<Logout  />} />
            <Route path="/" element={<LandingPage  />} /> 
        </Routes>               
    );
}

export { WebsiteRoutes as Routes };