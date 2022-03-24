import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer home-footer" id="footer">
            <div className="primary-footer grid grid-5 py-2-5 px-5">
                <span className="icon">
                    <i className="fab fa-cc-visa"></i>
                </span>
                <span className="icon">
                    <i className="fab fa-cc-mastercard"></i>
                </span>
                <span className="icon">
                    <i className="fab fa-paypal"></i>
                </span>
                <span className="icon">
                    <i className="fab fa-amazon-pay"></i>
                </span>
                <span className="icon">
                    <i className="fab fa-google-pay"></i>
                </span>  
            </div>
            <div className="secondary-footer px-5 py-2 grid grid-4">
                <ul className="footer-item list list-stacked list-style-none grid-item">
                    <li className="list-head text-sm p-0-5 mb-1">
                        Customer Center
                    </li>
                    <li className="list-item flex-row px-0-5">
                        <span className="icon">
                            <i className="fas fa-phone-alt mr-0-5"></i>
                        </span> 
                        Support Helpline
                    </li>
                    <li className="list-item text-sm px-0-5">
                        <a href="mailto:bookery@elixir.com" className="btn btn-link btn-light mr-0-5">
                            <span className="icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                            Email Us
                        </a>
                    </li>
                    <li className="list-item text-sm px-0-5">
                        Weekdays 09:30 - 18:00
                    </li>
                    <li className="list-item text-sm px-0-5">
                        Weekends 11:00 - 16:00
                    </li>
                    <li className="list-item text-sm px-0-5">
                        Holdays: Sat, Sun, National Holidays
                    </li>  
                </ul>
                <ul className="footer-item list list-stacked list-style-none grid-item">
                    <li className="list-head text-sm p-0-5 mb-1">
                        Service Hub and Store
                    </li>
                    <li className="list-item flex-row px-0-5">
                        <address>
                            Royal Industrial Estate, <br />
                            Opposite Robin & Co., <br />
                            Lokhandwala, Andheri(W), <br />
                            Mumbai, India - 4000053
                        </address>
                    </li>
                </ul>
                <ul className="footer-item list list-stacked list-style-none grid-item">
                    <li className="list-head text-sm p-0-5 mb-1">
                        Quick Links
                    </li>
                    <li className="list-item px-0-5">
                        <Link to="/" className="btn btn-link btn-light text-sm pb-0-25 brand logo">
                            Bookery
                        </Link>
                    </li>
                    <li className="list-item px-0-5 text-xs">
                        <ul className="list list-inline list-style-none">
                            <li className="list-item pr-0-25">
                                <Link to="/" className="btn-link">About Us</Link>
                            </li>
                            <li className="list-item px-0-25">
                                <Link to="/products" className="btn-link">Shop</Link>
                            </li>
                            <li className="list-item px-0-25">
                                <Link to="/cart" className="btn-link">My Cart</Link>
                            </li>
                            <li className="list-item pl-0-25">
                                <Link to="/wishlist" className="btn-link">My Wishlist</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="footer-item list list-stacked list-style-none grid-item">
                    <li className="list-head text-sm p-0-5 mb-1">
                        Social Media
                    </li>
                    <li className="list-item">
                        <div className="social-links flex-row">
                            <a href="#" className="btn btn-link btn-light">
                                <span className="icon">
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                            <a href="#" className="btn btn-link btn-light">
                                <span className="icon">
                                    <i className="fab fa-instagram"></i>
                                </span>
                            </a>
                            <a href="#" className="btn btn-link btn-light">
                                <span className="icon">
                                    <i className="fab fa-facebook"></i>
                                </span>
                            </a>
                            <a href="#" className="btn btn-link btn-light">
                                <span className="icon">
                                    <i className="fab fa-youtube"></i>
                                </span>
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="mt-1 pt-2 gray-color copyright-section span-cols text-sm text-center">
                    &copy; elixir designs 2022
                </div>
            </div>                       
        </footer>
    )
}

export {Footer};