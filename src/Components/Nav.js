import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div class="main-wrapper mp-pusher" id="mp-pusher"></div>

      {/* <header class="fixed header-light-nav"> */}
      <header class="menu_area-dark header-light-nav header-02">
        <div class="navbar-default">
          <div class="top-search bg-primary">
            <div class="container-fluid">
              <form class="search-form" action="/" method="GET">
                <div class="input-group">
                  <span class="input-group-addon cursor-pointer">
                    <button
                      class="search-form_submit fas fa-search display-27 text-white"
                      type="submit"
                    ></button>
                  </span>
                  <input
                    type="text"
                    class="search-form_input form-control"
                    name="s"
                    autocomplete="off"
                    placeholder="Type & hit enter..."
                  />
                  <span class="input-group-addon close-search">
                    <i class="fas fa-times display-27 mt-2"></i>
                  </span>
                </div>
              </form>
            </div>
          </div>

          <div class="container">
            <div class="row align-items-center g-0">
              <div class="col-12 col-lg-12">
                <div class="menu_area alt-font">
                  <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <div class="navbar-header navbar-header-custom">
                      <Link
                        to="/"
                        class="navbar-brand logodefault"
                      >
                        <img
                          id="logo"
                          src="../img/logos/logo-color3.png"
                          alt="logo"
                        />
                      </Link>
                    </div>

                    {/* <div class="navbar-toggler"></div> */}

                    <ul class="navbar-nav mx-auto" style={{ display: "none" }}>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contacts</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <Link to="/profile">Account</Link>
                        
                      </li>
                      <li>
                        <Link to="register">Register</Link>
                      </li>
                    </ul>

                    <div class="attr-nav">
                      <ul>
                        <li class="dropdown me-3 me-lg-0">
                          <Link to="/" class="dropdown-toggle">
                            <i class="ti-bag"></i>
                            <span class="badge bg-primary">3</span>
                          </Link>
                          <ul class="dropdown-menu cart-list">
                            <li>
                              <Link to="/" class="photo">
                                <img
                                  src="img/products/cart-thumbs/cart-thumb-01.jpg"
                                  class="cart-thumb"
                                  alt="..."
                                />
                              </Link>
                              <h6>
                                <Link to="/">Men's Football Boots </Link>
                              </h6>
                              <p>
                                2x - <span class="price">$30.00</span>
                              </p>
                            </li>
                            <li>
                              <Link to="/" class="photo">
                                <img
                                  src="img/products/cart-thumbs/cart-thumb-02.jpg"
                                  class="cart-thumb"
                                  alt="..."
                                />
                              </Link>
                              <h6>
                                <Link to="/">Sun Protection Cap</Link>
                              </h6>
                              <p>
                                1x - <span class="price">$10.20</span>
                              </p>
                            </li>
                            <li>
                              <Link to="/" class="photo">
                                <img
                                  src="img/products/cart-thumbs/cart-thumb-03.jpg"
                                  class="cart-thumb"
                                  alt="..."
                                />
                              </Link>
                              <h6>
                                <Link to="/">Heel Character Shoes</Link>
                              </h6>
                              <p>
                                2x - <span class="price">$39.00</span>
                              </p>
                            </li>
                            <li class="total bg-primary">
                              <span class="float-start">
                                <strong>Total</strong>: $79.20
                              </span>
                              <Link
                                to="shop-cart.html"
                                class="butn-style2 small white float-end w-auto"
                              >
                                <span>View Cart</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li class="search">
                          <Link to="/">
                            <i class="ti-search"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}