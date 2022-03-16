import React from 'react'

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
                    <p className="list-head text-sm p-0-5 mb-1">
                        Customer Center
                    </p>
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
                    <p className="list-head text-sm p-0-5 mb-1">
                        Service Hub and Store
                    </p>
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
                    <p className="list-head text-sm p-0-5 mb-1">
                        Quick Links
                    </p>
                    <li className="list-item px-0-5">
                        <a href="/" className="btn btn-link btn-light text-sm pb-0-25 brand logo">bookery</a>
                    </li>
                    <li className="list-item px-0-5 text-xs">
                        <ul className="list list-inline list-style-none">
                            <li className="list-item pr-0-25">
                                <a href="#" className="btn-link">About Us</a> 
                            </li>
                            <li className="list-item px-0-25">
                                <a href="#" className="btn-link">Products</a>
                            </li>
                            <li className="list-item px-0-25">
                                <a href="#" className="btn-link">My orders</a>
                            </li>
                            <li className="list-item pl-0-25">
                                <a href="#" className="btn-link">Cart</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="footer-item list list-stacked list-style-none grid-item">
                    <p className="list-head text-sm p-0-5 mb-1">
                        Social Media
                    </p>
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