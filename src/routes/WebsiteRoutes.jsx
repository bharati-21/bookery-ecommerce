/* External imports */
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

/* Page imports */
import { LandingPage, Products, Cart, WishList, Signup, Login, ProductPageItem } from 'pages/';
import { ProtectedRoutes } from './ProtectedRoutes';
import { NotFound } from 'components';

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
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/account" />
            </Route>
        </Routes>               
    );
}

export { WebsiteRoutes as Routes };