/* External imports */
import { Routes, Route } from 'react-router-dom';

/* Style imports */
import "./styles/styles.css";

/* Component imports */
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

/* Page imports */
import { LandingPage, Products, Cart, WishList, Signup, Login, Logout } from './pages/';


function App() {
    return (
        <div className="App">
            <Navbar  />
                <Routes>
                    <Route path="/products" element={<Products  />} />
                    <Route path="/cart" element={<Cart  />} />
                    <Route path="/wishlist" element={<WishList  />} />
                    <Route path="/signup" element={<Signup  />} />
                    <Route path="/login" element={<Login  />} />
                    <Route path="/logout" element={<Logout  />} />
                    <Route path="/" element={<LandingPage  />} /> 
                </Routes>                
            <Footer  />
        </div>
    );
}

export default App;