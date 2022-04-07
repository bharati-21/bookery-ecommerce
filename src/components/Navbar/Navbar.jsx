import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'; 

import './navbar.css';
import { useAuth, useCart, useFilter, useWishList } from 'contexts';
import { useState } from 'react';
import { getCartItemsTotal } from 'utils';
import { useToast } from 'custom-hooks';

const Navbar = () => {
    const { authState, setAuthState } = useAuth();
    const { isAuth } = authState;
    const navigate = useNavigate();
    const location = useLocation();
    const { wishListState: { wishListItems } } = useWishList();
    const { cartState: { cartItems } } = useCart();
    const { showToast } = useToast();

    const { filterState: { searchText }, filterDispatch } = useFilter();

    const handleAuth = () => {
        if(isAuth) {
            localStorage.removeItem('bookery-token');
            setAuthState({ ...authState, isAuth: false, user: {} });
            showToast('Logged out successfully.', 'success');
        }
        navigate('/login');
    }

    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
    const [showSearchDrawer, setShowSearchDrawer] = useState(false);

    const handleNavbarStateChange = isOpen => {
        setMobileNavbarOpen(isOpen);
    }

    const handleShowSearchDrawerChange = isShown => {
        setShowSearchDrawer(isShown);
    }

    const navigateToProducts = event => {
        event.preventDefault();
        if(searchText.trim() !== "" && location.pathName !== '/products') {
            handleShowSearchDrawerChange(false);
            navigate('/products');
        }
    }
    
    const handleChangeSearchText = event => {
        filterDispatch({ filterType: 'SET_SEARCH_TEXT', filterPayload: event.target.value });
    }

    const totalCartItems = isAuth ? cartItems?.length ? getCartItemsTotal(cartItems, "TOTAL_ITEMS") : 0 : 0;
    const totalWishListItems = isAuth ? wishListItems?.length ? wishListItems.length : 0 : 0;

    return (
        <nav className="navbar">
            <label className="hamburger">
                <input type="checkbox" className="navbar-hamburger-icon" id="navbar-hamburger-icon" onChange={() => handleNavbarStateChange(true)} checked={mobileNavbarOpen} />
                <span className="btn btn-icon">
                    <MenuIcon />
                </span>
            </label>
            <ul className="navlinks desktop-navbar navlinks-left list list-inline">
                <li>
                    <NavLink to="/" className="nav-link flex-col flex-align-center flex-justify-center">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="nav-link flex-col flex-align-center flex-justify-center">Shop</NavLink>
                </li>
            </ul>
            <h5 className="logo nav-link flex-col flex-align-center flex-justify-center">   
                <Link to="/" className="nav-link">Bookery</Link> 
            </h5>

            <div className={`mobile-navbar-drawer ${mobileNavbarOpen ? 'navbar-open' : 'navbar-close'}`}>
                <ul className="navlinks-mobile navlinks-left list-style-none flex-col flex-align-center flex-justify-center p-2">
                    <li className="btn-navbar-close">
                        <label>
                            <input type="checkbox" className="navbar-hamburger-icon" id="navbar-hamburger-icon" onChange={() => handleNavbarStateChange(false)} checked={mobileNavbarOpen} />
                            <span className="btn btn-icon">
                                <CloseIcon sx={{ fontSize: 30 }} />
                            </span>
                        </label>
                    </li>
                    <li>
                        <h5 className="mobile-logo nav-link">   
                            <Link to="/" className="nav-link">Bookery</Link> 
                        </h5>
                    </li>
                    <li>
                        <NavLink to="/" className="nav-link text-lg">
                            <h5>Home</h5>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="nav-link text-lg">
                            <h5>Shop</h5>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className={`search-container ${showSearchDrawer ? 'show-search-drawer' : 'hide-search-drawer'}`}>
                <button className="btn btn-icon" onClick={() => handleShowSearchDrawerChange(false)}>
                    <CloseSharpIcon className="close-icon"/>
                </button>
                <h2 className="search-container-head">Welcome</h2>
                <p>What book are you in the mood for today?</p>
                <form onSubmit={navigateToProducts}>
                    <div className="input-group input-search-group input-default input-inline">
                        <label className="text-label flex-row flex-align-center flex-justify-between p-0-5 px-0-5" htmlFor="input-inline-search">
                            <input type="text" id="input-inline-search" className="px-0-25 input-text text-reg" placeholder="Search Book..." value={searchText} onChange={handleChangeSearchText} />
                            <button type='submit' className="btn btn-icon btn-search-submit flex-row flex-align-center">
                                <SearchIcon className="mobile-search-icon" />
                            </button>
                        </label>
                        <span className="text-message mt-0-5"></span>
                    </div>
                </form>
            </div>
            
            <ul className="navlinks navlinks-right list list-inline nav-icons flex-align-center">
                    <li className="nav-link flex-col flex-align-center flex-justify-center" >
                        <button className="btn btn-icon" onClick={() => handleShowSearchDrawerChange(true)}>
                            <SearchIcon />
                        </button>
                    </li>                    
                
                    <li className="nav-link badge-container flex-col flex-align-center flex-justify-center">
                    <div className="badge-icon">
                        <Link to="/cart">
                            <span className="icon mui-icon">
                                <ShoppingCartIcon />
                            </span>
                        </Link>
                    </div>
                    <span className="badge-status badge-primary badge-notification p-0-25">
                        { totalCartItems > 9 ? "9+" : totalCartItems }
                    </span>
                </li>
                <li className="nav-link badge-container flex-col flex-align-center flex-justify-center">
                    <div className="badge-icon">
                        <Link to="/wishlist">
                            <span className="icon mui-icon">
                                <FavoriteBorderIcon />
                            </span>
                        </Link>
                    </div>
                    <span className="badge-status badge-primary badge-notification p-0-25">
                    { totalWishListItems > 9 ? "9+" : totalWishListItems }
                    </span>
                </li>
                <li className="nav-link">
                    <button className='btn text-reg' onClick={handleAuth}>{ isAuth ? 'Logout' : 'Login' }</button>
                </li>
            </ul>
        </nav>            
    );
}

export { Navbar };