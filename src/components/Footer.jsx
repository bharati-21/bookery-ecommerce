import React from 'react'

const Footer = () => {
    return (
        <footer class="footer home-footer" id="footer">
            <div class="primary-footer grid grid-5 py-2-5 px-5">
                <span class="icon">
                    <i class="fab fa-cc-visa"></i>
                </span>
                <span class="icon">
                    <i class="fab fa-cc-mastercard"></i>
                </span>
                <span class="icon">
                    <i class="fab fa-paypal"></i>
                </span>
                <span class="icon">
                    <i class="fab fa-amazon-pay"></i>
                </span>
                <span class="icon">
                    <i class="fab fa-google-pay"></i>
                </span>  
            </div>
            <div class="secondary-footer px-5 py-2 grid grid-4">
                <ul class="footer-item list list-stacked list-style-none grid-item">
                    <p class="list-head text-sm p-0-5 mb-1">
                        Customer Center
                    </p>
                    <li class="list-item flex-row px-0-5">
                        <span class="icon">
                            <i class="fas fa-phone-alt mr-0-5"></i>
                        </span> 
                        Support Helpline
                    </li>
                    <li class="list-item text-sm px-0-5">
                        <a href="mailto:bookery@elixir.com" class="btn btn-link btn-light mr-0-5">
                            <span class="icon">
                                <i class="fas fa-envelope"></i>
                            </span>
                            Email Us
                        </a>
                    </li>
                    <li class="list-item text-sm px-0-5">
                        Weekdays 09:30 - 18:00
                    </li>
                    <li class="list-item text-sm px-0-5">
                        Weekends 11:00 - 16:00
                    </li>
                    <li class="list-item text-sm px-0-5">
                        Holdays: Sat, Sun, National Holidays
                    </li>  
                </ul>
                <ul class="footer-item list list-stacked list-style-none grid-item">
                    <p class="list-head text-sm p-0-5 mb-1">
                        Service Hub and Store
                    </p>
                    <li class="list-item flex-row px-0-5">
                        <address>
                            Royal Industrial Estate, <br />
                            Opposite Robin & Co., <br />
                            Lokhandwala, Andheri(W), <br />
                            Mumbai, India - 4000053
                        </address>
                    </li>
                </ul>
                <ul class="footer-item list list-stacked list-style-none grid-item">
                    <p class="list-head text-sm p-0-5 mb-1">
                        Quick Links
                    </p>
                    <li class="list-item px-0-5">
                        <a href="/" class="btn btn-link btn-light text-sm pb-0-25 brand logo">bookery</a>
                    </li>
                    <li class="list-item px-0-5 text-xs">
                        <ul class="list list-inline list-style-none">
                            <li class="list-item pr-0-25">
                                <a href="#" class="btn-link">About Us</a> 
                            </li>
                            <li class="list-item px-0-25">
                                <a href="#" class="btn-link">Products</a>
                            </li>
                            <li class="list-item px-0-25">
                                <a href="#" class="btn-link">My orders</a>
                            </li>
                            <li class="list-item pl-0-25">
                                <a href="#" class="btn-link">Cart</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="footer-item list list-stacked list-style-none grid-item">
                    <p class="list-head text-sm p-0-5 mb-1">
                        Social Media
                    </p>
                    <li class="list-item">
                        <div class="social-links flex-row">
                            <a href="#" class="btn btn-link btn-light">
                                <span class="icon">
                                    <i class="fab fa-twitter"></i>
                                </span>
                            </a>
                            <a href="#" class="btn btn-link btn-light">
                                <span class="icon">
                                    <i class="fab fa-instagram"></i>
                                </span>
                            </a>
                            <a href="#" class="btn btn-link btn-light">
                                <span class="icon">
                                    <i class="fab fa-facebook"></i>
                                </span>
                            </a>
                            <a href="#" class="btn btn-link btn-light">
                                <span class="icon">
                                    <i class="fab fa-youtube"></i>
                                </span>
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="mt-1 pt-2 gray-color copyright-section span-cols text-sm text-center">
                    &copy; elixir designs 2022
                </div>
            </div>                       
        </footer>
    )
}

export {Footer};