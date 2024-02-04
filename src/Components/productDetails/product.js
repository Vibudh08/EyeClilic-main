import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Product() {
    const [activeImage, setActiveImage] = useState('img/products/single-product/original/01_product.jpg');
    
  return (
    <>
        <div class="row mb-6 mb-md-7 mb-lg-9">
            <div class="col-lg-5 text-center text-lg-start mb-1-9 mb-lg-0">
                <div class="xzoom-container">
                <img className="xzoom5 mb-1-9" id="xzoom-magnific" src={activeImage} alt="..." />
                <div className="xzoom-thumbs no-margin">
                  <Link to="" onClick={() => setActiveImage("img/products/single-product/original/01_product.jpg")}>
                    <img className="xzoom-gallery5" width="80" src="img/products/single-product/thumbs/01_product.jpg" xpreview="img/products/single-product/preview/01_product.jpg" alt='' title="The description goes here" />
                  </Link>
                  <Link to="" onClick={() => setActiveImage("img/products/single-product/original/02_product.jpg")}>
                    <img className="xzoom-gallery5" width="80" src="img/products/single-product/preview/02_product.jpg" title="The description goes here" alt='' />
                  </Link>
                  <Link to="" onClick={() => setActiveImage("img/products/single-product/original/03_product.jpg")}>
                    <img className="xzoom-gallery5" width="80" src="img/products/single-product/preview/03_product.jpg" title="The description goes here" alt='' />
                  </Link>
                  <Link to="" onClick={() => setActiveImage("img/products/single-product/original/04_product.jpg")}>
                    <img className="xzoom-gallery5" width="80" src="img/products/single-product/preview/04_product.jpg" title="The description goes here" alt='' />
                  </Link>
                  </div>
                </div>

            </div>
            <div class="col-lg-7 ps-lg-2-3">
                <div class="product-detail">
                    <h2 class="mb-1">USB Pen Drive <span class="label-sale bg-primary text-white text-uppercase display-31">Sale</span></h2>
                    <div class="bg-primary separator-line-horrizontal-full mb-4"></div>
                    <p class="rating-text"><span>SKU:</span> <span class="font-500 theme-color">290397</span></p>
                    <p>Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.</p>

                    <div class="mb-4">

                        <div class="d-inline-block me-3 pe-3 borders-end border-color-extra-medium-gray">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>

                        <div class="d-inline-block">
                            <a class="text-primary" href="/">Write a review</a>
                        </div>

                    </div>
                    <div class="mb-4">
                        <span class="me-3 display-26 font-weight-600 offer-price">$21.00</span>
                        <span class="display-26 font-weight-700 text-primary">$18.00</span>
                    </div>

                    <div class="row">
                        <div class="col-5 col-md-3">
                            <label>Size:</label>

                            <select class="mb-4 form-control medium form-select">
                                <option value="S">8 GB</option>
                                <option value="M">16 GB</option>
                                <option value="L">64 GB</option>
                                <option value="XL">128 GB</option>
                            </select>

                        </div>
                        <div class="col-5 col-md-3">
                            <div class="product-color">
                                <label>Color:</label>
                                <select class="mb-4 form-control medium form-select">
                                    <option value="Red">Red</option>
                                    <option value="Black">Black</option>
                                    <option value="Beige">Beige</option>
                                    <option value="White">White</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 col-lg-2">
                            <label>Qty:</label>
                            <input type="text" value="1" placeholder="1" class="form-control medium mb-4" />
                        </div>

                    </div>

                    <div class="row mb-4">
                        <div class="col-lg-12">
                            <button class="butn-style2 me-3 mb-2 mb-md-0"><span><i class="fas fa-shopping-cart me-1"></i> Add to Cart</span></button>
                            <button class="butn-style2 dark"><span><i class="fas fa-heart me-1"></i> Add to wishlist</span></button>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-lg-7">

                            <label class="font-weight-600">Share on:</label>
                            <ul class="social-icon-style1 ps-0">
                                <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                                <li><Link to="/"><i class="fab fa-youtube"></i></Link></li>
                                <li><Link to="/"><i class="fab fa-linkedin-in"></i></Link></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
