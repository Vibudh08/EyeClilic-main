import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer class="classic-footer bordered">

            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-6 mb-2-3 mb-lg-0">
                        <h3>Contact Us</h3>
                        <ul class="list-style mb-2 ps-0">
                            <li>
                                <strong>Address:</strong><span class="ps-1">Netra Jyoti Eye Clinic Near Gosaidaspur Chauraha,Kannuj,India</span>
                            </li>
                            <li>
                                <strong>Phone: </strong><span class="ps-1">+91 9918453439</span>
                            </li>
                            <li>
                                <strong>Email: </strong><span class="ps-1">bpratap060@gmail.com</span>
                            </li>
                        </ul>

                        <ul class="list-style-two mb-0 ps-0">
                            <li>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="/"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-2-3 mb-lg-0">

                        <div class="row">
                            <div class="col-md-6 col-6 pe-lg-0">
                                <h3>Quick Links</h3>
                                <ul class="list-style ps-0">
                                    <li><a href="/">News</a></li>
                                    <li><a href="/">History</a></li>
                                    <li><a href="/">Our shop</a></li>
                                    <li><a href="/">Secure shopping</a></li>
                                    <li><a href="/">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-6 pe-lg-0">
                                <h3>My Account</h3>
                                <ul class="list-style ps-0">
                                    <li><a href="/">My Account</a></li>
                                    <li><a href="/">Order History</a></li>
                                    <li><a href="/">Wish List</a></li>
                                    <li><a href="/">Newsletter</a></li>
                                    <li><a href="/">Returns</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12">
                        <div class="ps-lg-1-9">

                            <div class="row">
                                <div class="col-lg-12 col-md-6 mb-1-9">
                                    <h3>News Letter</h3>
                                    <form method="post">
                                        <div class="form-group footer-subscribe">
                                            <input type="email" placeholder="Subscribe with us" id="email" class="form-control" />
                                            <a href="/" class="butn-style2"><i class="fas fa-paper-plane display-27 mt-1"></i></a>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-lg-12 col-md-6">
                                    <h3>Download Our Mobile Apps</h3>
                                    <div class="text-start">
                                        <a href="/" class="btn bordered text-start ms-1 ms-md-0 mt-1 mt-md-0 mb-0 mb-lg-2 mb-xl-0">
                                            <span class="media align-items-center">
                                        <span class="fab fa-apple display-26 pe-3"></span>
                                            <span class="media-body">
                                            <span class="d-block display-32">Download on the</span>
                                            <strong>App Store</strong>
                                            </span>
                                            </span>
                                        </a>

                                        <a href="/" class="btn bordered text-start ms-1 ms-lg-0 ms-xl-1 mt-1 mt-md-0">
                                            <span class="media align-items-center">
                                        <span class="fab fa-google-play display-26 pe-3"></span>
                                            <span class="media-body">
                                            <span class="d-block display-32">Get it on</span>
                                            <strong>Google Play</strong>
                                            </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div class="footer-bottom py-1-9 mt-6 mt-lg-8">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 mb-3 mb-md-0">
                            <div class="text-center text-md-start">
                                <p class="mb-0">&copy; <span class="current-year"></span> Netra Jyoti Eye Clinic | Design by <Link to="https://jogendra-yadav.netlify.app/" target="_blank" class="text-purple">Jogendra Yadav</Link></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-style-17 text-center text-md-end">
                                <li><img src="img/content/payment-options/visa.png" alt="..."/></li>
                                <li><img src="img/content/payment-options/mastercard.png" alt="..."/></li>
                                <li><img src="img/content/payment-options/paypal.png" alt="..."/></li>
                                <li><img src="img/content/payment-options/amex.png" alt="..."/></li>
                                <li><img src="img/content/payment-options/discover.png" alt="..."/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}
