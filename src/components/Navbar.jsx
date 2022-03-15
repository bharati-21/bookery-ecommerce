import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navlinks navlinks-left list list-inline">
                <li className="nav-link">
                    <a href="/">Home</a>
                </li>
                <li className="nav-link">
                    <a href="/">Shop</a>
                </li>
            </ul>
            <h6 className="logo nav-link">     
                <a href="#" className="nav-link"> 
                    Bookery
                </a>
            </h6>

            <div className="search-container">
                <CloseSharpIcon className="close-icon"/>
                <h2 className="search-container-head">Welcome</h2>
                <p>What book are you in the mood for today?</p>
                <form>
                    <div class="input-group input-search-group input-default input-inline">
                        <label class="text-label flex-row flex-align-center flex-justify-between p-0-25 px-0-5" for="input-inline-search">
                            <input type="text" id="input-inline-search" class="px-0-25 input-text" placeholder="Search Book..." />
                            <button type='submit' className="btn-search-submit flex-row flex-align-center">
                                <SearchIcon style={{color: "var(--light-theme-default-color)"}} />
                            </button>
                        </label>
                    <span class="text-message mt-0-5"></span>
                </div>
                </form>
            </div>
            
            <ul className="navlinks navlinks-right list list-inline nav-icons">
                    <li className="nav-link" >
                        <SearchIcon  />
                    </li>                    
                <div className="badge-container">
                    <li className="nav-link badge-icon">
                        <ShoppingCartIcon  />
                    </li>
                    <span className="badge-status badge-default badge-notification p-0-25">
                        0
                    </span>
                </div>
                <div className="badge-container">
                    <li className="nav-link badge-icon">
                        <FavoriteBorderIcon  />
                    </li>
                    <span className="badge-status badge-default badge-notification p-0-25">
                        0
                    </span>
                </div>
                <li className="nav-link">
                    <AccountCircleIcon  />
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };